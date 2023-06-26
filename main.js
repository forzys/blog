const fs = require('fs');
const path = require('path');
const core = require('@actions/core');
const github = require('@actions/github');
 
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
        const { data } = await octokit.issues.listForRepo({ owner, repo }); 
 
        let issues = []
        for(let i= 0; i< data.length; i+= 15){
            issues.push(data.slice(i, i + 15)) 
        }
 
 
        fs.writeFile(path.join(issuesDir, 'blog.json'), JSON.stringify({ total: data.length, pageSize: 15 }), (err)=>{
            if (err) { throw err } 
        }); 


        issues.forEach((issue, index)=>{
            const info = { page: index + 1, total: data.length, pageSize: 15, data: [] }
            const name = 'blog_' + index + '.json'
           
            issue.forEach(ele=>{
                let file = path.join(issuesDir, ele.number + '-' + ele.title.replace(' ','_') + '.md');
 
                info.data.push({
                    title: ele?.title,
                    author:ele?.user?.login,
                    labels:ele?.labels?.map(i=>i?.name),
                    updated:ele?.created_at,
                    name : ele?.number + '-' + ele?.title.replace(' ','_') + '.md'
                });

                fs.writeFile(file, ele.body, (err) => {
                    if (err) { throw err }
                    core.info(`issue#${ele.number} -> ${file}`)
                });
            });

            fs.writeFile(path.join(issuesDir, name),  JSON.stringify(info), (err) => {
                if (err) { throw err }
            });
        });

    } catch (error) {
        core.setFailed(error.message);
    }
}

main()