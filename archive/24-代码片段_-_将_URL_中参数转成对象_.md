<!-- intro: 代码小片段 写一个解析URL的函数，将URL链接中的参数提取组成一个对象。-->

```javascript
const onURLFormat = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  ); 
  
  // use
onURLFormat('https://www.example.com?search=word') // {search:'word'}
```