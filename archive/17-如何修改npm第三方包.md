<!-- intro: 想象这么一个场景，当你使用的npm第三方库中的某个api不再被支持，或者当你需要对某个第三方库中的功能进行改写或者部分自定义。那该如何操作呢？ -->

### 先占个位 后续进行详细描述
1. fork源码 修改发布npm安装  
2. patch-package 插件写补丁覆盖node_modules包  
3. 在babel.config.js 中的 module-resolver 配置中添加别名 指定文件路径替换  