# [Flex 布局的一些总结](https://github.com/forzys/blog/issues/12)

## Flex 布局的一些总结

### 不定个数子元素， 每行N个依次排列
```css

.parent {
    display: flex;
    flex-wrap: wrap; 
}

.child{
    flex: 0 0 calc(33.33% - 16px);  /**（例如 N = 3） 100% / N - 间距  */ 
    margin: 8px;
}
```


### 不定个数子元素， 每行N个依次排列 且最后一个子元素靠右排列

```css
.parent {
    display: flex;
    flex-wrap: wrap; 
}
  
.child{
    flex: 0 0 calc(33.33% - 16px);  /**（例如 N = 3） 100% / N - 间距  */ 
    margin: 8px;
}
.child:last-child{
    margin-left: auto;  /** 那个方向的margin auto 就 排斥那个方向 */ 
}

```

### 不定个数子元素， 每行N个依次排列 且最后一个子元素居中排列
```css
.parent {
    display: flex;
    flex-wrap: wrap; 
}
  
.child{
    flex: 0 0 calc(33.33% - 16px);  /**（例如 N = 3） 100% / N - 间距  */ 
    margin: 8px;
}
.child:last-child{
    margin: 0 auto;  /** 一般判断最后剩一个元素使用  如果剩多个元素前面的会正常排 最后一个会在剩余空间居中 */ 
}

```


