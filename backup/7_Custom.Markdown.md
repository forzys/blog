# [Custom Markdown](https://github.com/forzys/blog/issues/7)

 
<!--  intro: 发现一个十分小巧的Markdown解析库 但是十分古老 ， 不支持Table、对Code的支持也十分不友好，还发现一些bug等等
所以动手添加了需要的一些功能  -->

### Custom Markdown

> 发现一个十分小巧的Markdown解析库 但是十分古老 ， 不支持Table、对Code的支持也十分不友好，还发现一些bug等等
所以动手添加了需要的一些功能


修改 [pagedown](https://github.com/ujifgc/pagedown) 添加table支持 添加删除线 以及代码块等。
适合个人博客及其他简单的Markdown渲染 。
十分小巧 build后只有10k左右 gzip压缩后只有4k大小 没有其他复杂的功能 提供pluginHooks可自定义渲染内容


[custom-markdown](https://github.com/forzys/custom-markdown)

---
update:

添加hook以支持code语法高亮效果

Todo:

接下来继续修改bug 看看在实际项目中使用的效果如何
