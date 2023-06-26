# [Git cherry-pick 分支出现冲突的解决方式](https://github.com/imm-o/blog/issues/3)

 
 <!-- 记录 master分支 cherry-pick 其他分支的提交内容(commit)时发现有大量冲突的解决办法   -->
  
**场景：**	master分支 **cherry-pick** testing分支的提交内容(commit)时发现有大量冲突

**原因:**	之前master分支**cherry-pick**过testing分支的内容  且**解决了冲突之后push到master**

**解决方案：**
### 如果简单少量的冲突可以直接解决冲突后提交
- git diff testing
- 解决冲突
- git commit
- git push

### 如果存在大量未提交内容同时希望保留testing的提交记录  
- 找一个存在冲突之前的 commit
- git checkout **commit id** src/ common/ （**变化内容文件夹**）
- git commit -m 
- git diff **master**..**commit id** （比较当前与commit id 的内容是否仍有不同）
- git cherry-pick **commit id**..**new commit id**   
(从checkout的commit id一直pick到最新的提交)
- git push


> 优点：保留了提交修改的原始记录  
缺点：master会出现两条cherry-pick的记录 （之前pick过一次的现在会重新pick一次）



---

### 可能需要用到的其他Git命令
```javascript
    git log --author=username  // 筛选用户提交记录
    git log --grep=keywords    // 筛选关键词提交记录
    git log --pretty=format:"%h %an %cd %s" --date=short  // 美化/格式化 提交记录
    git master2 rebase   // (master2：需要rebase 的分支名) rebase master2 分支
```

### 常用Git命令记忆
```javascript
    git add .  // 暂存本地修改
    git commit -m 'msg'   // 提交本地修改到本地版本库
    git push  // 推送修改到对应的远程分支
    git push origin HEAD:remote_branch  // 推送到自定义远程分支 (远程分支不存在会新建)
    git checkout -b local_branch origin/remote_branch   // 新建远程分支对应的本地分支
    git checkout local_branch  // 切换本地分支
    git branch [-a]  // 查看本地分支 [远程分支]
    git branch -D local_branch // 删除本地分支
    git push origin --delete remote_branch // 删除远程分支 
    git branch --set-upstream-to=origin/remote_branch local_branch // 关联远程分支
```  
