<!-- title: Custom Markdown 基础语法支持  -->
<!-- intro: Markdown 基础语法 用于展示 Custom Markdown 的基础语法支持情况  --> 
<!-- created_at: 2023-06-30T23:59:59Z -->



## 标题

# h1 标题  
## h2 标题   <small> <sub>(h2添加了特殊样式) </sub></small> 
### h3 标题  
#### h4 标题  
##### h5 标题  
###### h6 标题  

 
## 文本样式

*这是倾斜的文字*    
**这是加粗的文字**   
***这是斜体加粗的文字***  
~~这是加删除线的文字~~  


## 引用

>这是引用的内容  
>>这是二级引用的内容   

## 分割线 

---
*** 

<br />

## 图片

![blockchain](https://avatars.githubusercontent.com/u/31484328?v=4 "区块链")
<!-- <img src="https://avatars.githubusercontent.com/u/31484328?v=4" alt="区块链" /> -->


## 超链接  

[Custom Markdown](https://github.com/forzys/custom-markdown "超链接")


## 列表

1. 无序列表
    + Create a list by starting a line with `+`, `-`, or `*`
    + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:   
        * Create with `*`
        + Create with `+`
        -  Create with `-`
    + Very easy!

2. 有序列表
    1. List item marker
    2. List item marker
    3. List item marker

3. 自定义列表开始序号  
    57. List item marker
    1. List item marker


## 代码

1.Inline `code`  

2.Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


3.Block code "fences"

```
Sample text here...
```

4.Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
}; 
console.log(foo(5));
```

```css
body {
    background-color: #f1f1f1;
}
```

## 表格

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟