



## [Autofit](https://github.com/LarryZhu-dev/autofit.js)

[autofit.js是一个可以让你的PC项目自适应屏幕的工具，其原理非常简单，即在scale等比缩放的基础上，向右或向下增加了宽度或高度，以达到充满全屏的效果，使用autofit.js不会挤压、拉伸元素，它只是单纯的设置了容器的宽高]
 
[

    autofit.init({
        dh: 1080,
        dw: 1920,
        el:"#app",
        resize: true
    },false) // 可关闭控制台运行提示输出

    // 忽略某些元素 传入 ignore 以使元素不被缩放
    autofit.init({
        ignore: [{  el: ".gaodeMap", }]
    })

    // * - el：渲染的dom，默认是 "#app"，必须使用id选择器 
    // * - dw：设计稿的宽度，默认是 1920 
    // * - dh：设计稿的高度，默认是 929 ，如果项目以全屏展示，则可以设置为1080
    // * - resize：是否监听resize事件，默认是 true
    // * - ignore：忽略缩放的元素（该元素将反向缩放），参数见readme.md
    // * - transition：过渡时间，默认是 0
    // * - delay：默认是 0
]


## [UPNG](https://github.com/photopea/UPNG.js)

[UPNG.js 一个小型、快速且先进的 PNG / APNG 编码器和解码器。它是Photopea 图像编辑器的主要 PNG 引擎。]

[

    UPNG.encode(imgs, w, h, cnum, [dels])

    // imgs：帧数组。帧是包含像素数据的 ArrayBuffer（RGBA，每通道 8 位）
    // w, h: 图像的宽度和高度
    // cnum：结果中的颜色数量；0：所有颜色（无损PNG）
    // dels：每帧的毫秒延迟数组（仅当 2 个或更多帧时）
    // 返回包含 PNG 文件的二进制数据的 ArrayBuffer
]
 
```js


```
