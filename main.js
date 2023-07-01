const fs = require('fs');
const path = require('path');
const core = require('@actions/core');
const github = require('@actions/github');
 


function jsonFormat(text='', init={}) {
    try{
        const isJson = /\[]|{}/.test(text.replace(/(?<=.).*(?=.$)/,''))
        return isJson ? JSON.parse(text) : init
    }catch(e){
        return init
    }
}


function onMarkdownInfo(ele = {}) {
    const {body='', ...other} = ele
     
    const info = {}
    body?.replace(new RegExp('<!-- title: (.*?) -->'),(m1,m2)=>info.title = m2 || other.title)
    body?.replace(new RegExp('<!-- update: (.*?) -->'),(m1,m2)=>info.created_at = m2 || other.created_at)
    body?.replace(new RegExp('<!-- intro: (.*?) -->'),(m1,m2)=>info.intro = m2 || other.intro)
 
    return {
        ...other, 
        ...info,
        id: other.id || info.title?.replace(/ /g,'_'),
    }
}
 
function onArchive(issues, space){
    let externalDir = path.join(space, 'external'); 
    if (!fs.existsSync(externalDir)) {
        fs.mkdirSync(externalDir)
    }
    
    const files = fs.readdirSync(externalDir);  
    const exts = files.map(name=>{
        const body = fs.readFileSync(externalDir + '/' + name).toString();
      
        return {
            title: name.replace('.md',''),
            body, 
        }
    });

    return [].concat(issues, exts).sort((a,b)=>{
        if(!b?.created_at) return -1
        return b?.created_at - a?.created_at
    });
}

async function main() {
    try { 
        var owner = process.env['GITHUB_NAME']
        var repo = process.env['GITHUB_REPO']
        var dist = process.env['GITHUB_DIST'] 
  
        core.info(`GITHUB_OWNER = '${owner}'`);
        core.info(`GITHUB_REPO = '${repo}'`);
        core.info(`ISSUES_DIST = '${dist}'`);

        let ghToken = process.env['GITHUB_TOKEN'] 
        if (!ghToken) {
            throw new Error('GITHUB_TOKEN not defined')
        }
        
        let ghWorkspacePath = process.env['GITHUB_WORKSPACE']
        if (!ghWorkspacePath) {
            throw new Error('GITHUB_WORKSPACE not defined')
        }

        ghWorkspacePath = path.resolve(ghWorkspacePath)
        core.info(`GITHUB_WORKSPACE = '${ghWorkspacePath}'`)

        let issuesDir = path.join(ghWorkspacePath, dist);
        
        if (!fs.existsSync(issuesDir)) {
            fs.mkdirSync(issuesDir)
        }

        const octokit = github.getOctokit(ghToken);
        const list = await octokit.issues.listForRepo({ owner, repo }); 
  
        // join External folder
        const issues = onArchive(list?.data, ghWorkspacePath)
 
        const info = { total: issues.length, data: [] }

        /**
         * 循环获取Issues
         * 1. 写入 md 文件
         * 2. 写入索引文件
         */
        issues.forEach(ele=>{ 
            let item = onMarkdownInfo(ele);
            let title_name = [ele?.number, item?.title.replace(/ /g,'_')].filter(Boolean).join('-')
            let file = path.join(issuesDir, title_name + '.md');
            
            info.data.push({
                id:     item?.id,
                title:  item?.title,
                author: ele?.user?.login || owner,
                labels: ele?.labels?.map(i=>i?.name),
                updated:item?.created_at,
                name :  title_name,
                intro:  item.intro || item.created_at,
                issues_url: item?.html_url,
            });

            fs.writeFile(file, ele.body, (err) => {
                if (err) { throw err }
                core.info(`issue#${ele.number} -> ${file}`)
            });
        });

        fs.writeFile(path?.join(issuesDir, 'blog.json'),  JSON.stringify(info), (err) => {
            if (err) { throw err }
        })
    } catch (error) {
        core.setFailed(error.message);
    }
}

main()