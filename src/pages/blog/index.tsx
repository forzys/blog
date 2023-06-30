// @ts-nocheck
import Card from "@/components/card";
import { memo, useEffect, useMemo } from "react";  
import Markdown from '@/application/Markdown'
import prism from '@/application/prism'
import { useUpdate } from "@/hooks/useUpdate";
import { dateFormat } from "@/common/common"; 
import { useFetch, apis } from '@/request/index'
import Button from "@/components/button";
import Spining from "@/components/spining";

import styles from './index.module.css'
 
var hmd =  `

<!-- title: Custom Markdown 基础语法支持  -->
<!-- intro: Markdown 基础语法 用于展示 Custom Markdown 的基础语法支持情况  --> 
 
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

## 图片

![blockchain](https://avatars.githubusercontent.com/u/31484328?v=4 "区块链")
<!-- <img src="https://avatars.githubusercontent.com/u/31484328?v=4" alt="区块链" /> -->


## 超链接  

[Custom Markdown](https://github.com/forzys/custom-markdown "超链接")


## 列表

1. 无序列表
    + Create a list by starting a line with \`+\`, \`-\`, or \`*\`
    + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:   
        * Create with \`*\`
        + Create with \`+\`
        -  Create with \`-\`
    + Very easy!

2. 有序列表
    1. List item marker
    2. List item marker
    3. List item marker

3. 自定义列表开始序号  
    57. List item marker
    1. List item marker


## 代码

1.Inline \`code\`  

2.Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


3.Block code "fences"

\`\`\`
Sample text here...
\`\`\`

4.Syntax highlighting

\`\`\`js
var foo = function (bar) {
  return bar++;
}; 
console.log(foo(5));
\`\`\`

\`\`\`css
body {
    background-color: #f1f1f1;
}
\`\`\`

## 表格

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

`

let mmd = '_this_ is **easy** to `use`.';

// console.clear(); 


export default memo((props)=>{

    const [https] = useFetch()
    const [state, setState, {navigate}] = useUpdate({
        pre: 'blog',
        pages:{
            page: 0,
            total:'',
        },
    })
   
    const mdc = useMemo(()=> new Markdown.Converter(),[])
  
 
    useEffect(()=>{
        const path = apis.blogs.replace('$blog', state.pre);
        const path_0 = apis.blogs.replace('$blog', state.pre + '_0');
 
        // https.get(path).then((res)=>{ 
        //     console.log('pages:',{ res })
        //     setState({ pages: res.data })
        // }); 

        // https.get(path_0).then((res)=>{ 
        //     const { page, total, data: archive} = res.data;
        //     setState({ pages: { page, total }, archive });
        // });


        // mdc.hooks.set('preConversion', (text:any)=>{
             
        // });
        mdc.hooks.set('postCodeGamut', (text:any, language:any)=>{
            console.log({ text })
            return prism.highlight(text, prism?.languages?.[language || 'js']) || text
        })

        console.log({ prism})  
        setState({ mdc : mdc.makeHtml(hmd) }) 
     
    },[])

    const onSkip = (info:any) =>{

        // const archive = apis.archive?.replace('$blog', info.name)

        // setState({ loading: true });

        navigate('/blog/'+11111)
        // https.get(archive, {type:'text'}).then((res)=>{
        //     if(res.success){
        //         const md = mdc.makeHtml(res.data)
        //         state.mdc = md 
        //     }
        //     console.log(res.data)
        //     setState({ loading: false, mdc: state.mdc  })
        // }); 
 
        // /blog/:id

    }

    const onBack = ()=>{
        setState({ mdc: '' })
    }

    
    return (
        <div className="main">
            {/* <Card bodyStyle={{overflow:'auto'}}>  */}
                {
                    state.mdc && (
                        <> 
                            <div className={styles.markdown} dangerouslySetInnerHTML={{__html: state.mdc }} />
                        </> 
                    )
                }

                <Spining loading={state.loading}>

                    <div style={{display: !!state.mdc ? 'none' : 'block'}}>
                        {
                            state?.archive?.map((item:any)=>{
                                return (
                                    <article key={item?.id} className="blog-item">
                                        <h2><a style={{cursor:'pointer'}} onClick={onSkip.bind(null,item)}>{item?.title}</a></h2>
                                        <aside>{item?.intro?.slice(0,50)+'...'}</aside>
                                        <footer>{dateFormat(item?.updated).format('YYYY-MM-DD hh:mm:ss')}</footer> 
                                    </article>
                                )
                            })
                        }
                    </div>

                </Spining>

                
            {/* </Card> */}
        </div>
    )

})