<!-- intro: 想象这么一个场景，当你使用的npm第三方库中的某个api不再被支持，或者当你需要对某个第三方库中的功能进行改写或者部分自定义。那该如何操作呢？ -->

### 先占个位 后续进行详细描述
1. fork源码 修改发布npm安装  
2. patch-package 插件写补丁覆盖node_modules包  
3. 在babel.config.js 中的 module-resolver 配置中添加别名 指定文件路径替换  


---

###  1. npm 发布 package 流程

1.  去 npm 官网注册一个账号
2.  使用`npm login`登录用户名 密码  `可能会向邮箱中发送验证码`
3.  fork源码修改 
4.  使用`npm publish`发布 `如果报错可以切换 taobao 源`

```bash
npm config set registry https://registry.npmjs.org
```
5. 如果有 426 报错的话可以试试下面命令
```bash
npm install -g https://tls-test.npmjs.com/tls-test-1.0.0.tgz
```
