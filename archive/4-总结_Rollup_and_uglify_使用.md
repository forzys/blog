<!-- intro: 总结rollup and uglify的使用, rollup 是一款小巧的javascript模块打包工具，使用模块化工具Rollup打包自己开发的JS库, 并使用uglify压缩代码-->


### 简介:

> rollup是一款小巧的javascript模块打包工具，通过rollup打包后的代码，体积较小，而且没有冗余的代码
> rollup提供了五种选项:  
1. AMD: 浏览器端的模块规范, 可通过 RequireJS 可加载
2. CommonJS: Node 默认的模块规范, 可通过 Webpack 加载 
3. ESM: ES2015 Module 规范, 可用 Webpack, Rollup 加载
4. IIFE: 自执行函数, 可通过 ```<script>``` 标签加载
5. UMD: 兼容 IIFE, AMD, CJS 三种模块规范


使用配置文件 ***rollup.config.js***
```
export default {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [ 
        babel({ exclude: 'node_modules/**' }), 
        uglify(),
    ]
}
```
> 执行 rollup -c rollup.config.js 启动配置项;

### rollup and uglify 使用记录

1. 安装  
```
    yarn add rollup --dev 
    npm install uglify-js -g 
``` 

2. 使用  
```
    var cjs = `yarn rollup [input-file] --format cjs --file [output-file]` 
    var esm = `yarn rollup [input-file] --format esm --file [output-file]`
    var umd = `yarn rollup [input-file] --format umd --name [global-name] --file [output-file]`
```
 
3. 配合 uglifyjs  
```
    uglifyjs [input-file] -m -o [output-file]    
```

4. 实例  
```
    yarn rollup ./calendar.js --format cjs --file ./temp.js
    uglifyjs ./temp.js -m -o ./calendar.min.js

    yarn rollup ./calendar.js --format umd --name Calendar --file ./temp.js
    uglifyjs ./temp.js -m -o ./calendar.min.js
``` 