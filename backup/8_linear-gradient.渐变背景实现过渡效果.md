# [linear-gradient 渐变背景实现过渡效果](https://github.com/forzys/blog/issues/8)

<!-- intro: 做渐变色背景切换的时候发现如果直接改变background 的 linear-gradient值设置的 transition 属性不会生效  --> 

## background: linear-gradient 渐变背景实现过渡效果

**场景**: 做渐变色背景切换的时候发现如果直接改变`background` 的 `linear-gradient`值设置的 transition 属性不会生效。
> CSS 过渡效果（transition）是一种在元素从一种状态转换到另一种状态时，实现平滑动画过渡的方法。  

**只有具有中间值的属性才有过渡效果**  
```swift
颜色：color background-color border-color outline-color
位置：background-position left right top botton
长度：
    [1]max-height min-height max-width min-width height width
    [2]border-width margin padding outline-width outline-offset
    [3]font-size line-height text-indent vertical-align  
    [4]border-spacing letter-spacing word-spacing
数字: opacity visibility z-index font-weight zoom
组合: text-shadow transform box-shadow clip
其他: gradient
```
`background-image`不支持 CSS3的 `transition`.   
设置 background gradient 实际是作为 background-image 存在 所以不会有过渡效果.  
渐变不支持 `transition` 那要怎么实现渐变背景的过渡效果呢?


网上找了一圈大概有这几种方法：
## 1.  利用 background-color 
```css 
    .box{
        background: #f2f3f4 linear-gradient(to right, rgba(225,255,115,0), rgba(225,255,115,.5));
        transition: background-color .3s;
    }
    .box:hover{
       background-color: #a4907c;
    }

```
- background-color 作为底色 通过改变 background-color 实现渐变效果

## 2. 利用 background-position.  

```css 
    .box{
        background: linear-gradient(to right, #f2f3f4,  #a4907c);
        background-size: 200%;
        transition: background-position .3s;  
    }
    .box:hover {
        background-position: 100% 0;    
    }
```
- background-position 定位放大的背景位置实现渐变效果.  

## 3. 利用 伪元素 配合 opacity
```css
  .box { 
      background: linear-gradient(to right, olive, green);
      position: relative;
      z-index: 0;    
  }
  .box::before {
      content: '';
      position: absolute;
      left: 0; top: 0; right: 0; bottom: 0;
      background: linear-gradient(to right, green, purple);
      opacity: 0;    
      transition: opacity .5s;
      z-index: -1;
  }
  .box:hover::before {
      opacity: 1;    
  }
```
-  利用伪元素 配合 opacity 实现渐变效果.  

## 4. 利用 [CSS houdini](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Houdini)
> Houdini 是一组底层 API，它们公开了 CSS 引擎的各个部分，从而使开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展 CSS。Houdini 是一组 API，它们使开发人员可以直接访问[CSS 对象模型](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model) （CSSOM），使开发人员可以编写浏览器可以解析为 CSS 的代码，从而创建新的 CSS 功能，而无需等待它们在浏览器中本地实现。
```css
.box{
 --bg-0:#98eecc;
  --bg-1:#d0f5be;
  background-image: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
  transition: --bg-1 .5s, --bg-2 .5s;
} 
.box:hover {
     --bg-0:#fbffdc; 
    --bg-1:#a4907c; 
}
```

```ts
if (window.CSS) {
   (window?.CSS as any)?.registerProperty({
          name: '--bg-0',
          syntax: '<color>',
          inherits: false,
          initialValue: 'transparent'
     });
   (window?.CSS as any)?.registerProperty({
        name: '--bg-1',
        syntax: '<color>',
        inherits: false,
        initialValue: 'transparent'
    });
}
```
> 注意TypeScript 编译器无法正确地识别 CSS 对象上的 registerProperty 方法 需要使用类型断言 将CSS对象的类型设置为 any. [当前各浏览器对Houdini的支持情况](https://ishoudinireadyyet.com/)

**其他方式 例如利用动画属性也可以实现**

## 最终效果

<img src="https://s2.loli.net/2023/07/01/saJ2Z69yjrnmOfU.gif" width="50%" />

