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

 
function onArchive(issues, space){
    let externalDir = path.join(space, 'external'); 
    if (!fs.existsSync(externalDir)) {
        fs.mkdirSync(externalDir)
    }
    
    const files = fs.readdirSync(externalDir);  
    const exts = files.map(name=>{
        const body = fs.readFileSync(externalDir + '/' + name).toString();
        const [, config] = body?.match(new RegExp('<!-- config: (.*?) -->')) || []
        
        return {
            title: name.replace('.md',''),
            body,
            ...jsonFormat(config)
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
            let title_name = [ele?.number, ele?.title.replace(/ /g,'_')].filter(Boolean).join('-')
            let file = path.join(issuesDir, title_name + '.md');
            
            // 获取 markdown 文件 intro
            const [, intro] = ele?.body?.match(new RegExp('<!-- intro: (.*?) -->')) || []

            info.data.push({
                id:     ele?.id,
                title:  ele?.title,
                author: ele?.user?.login || owner,
                labels: ele?.labels?.map(i=>i?.name),
                updated:ele?.created_at,
                name :  title_name + '.md',
                intro:  intro, 
                issues_url: ele?.html_url,
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