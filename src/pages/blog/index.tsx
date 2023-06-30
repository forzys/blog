// @ts-nocheck
import Card from "@/components/card";
import { memo, useEffect, useMemo } from "react"; 
// import showdown from '@/application/showdown' 
import Markdown from '@/application/Markdown' 
import { useUpdate } from "@/hooks/useUpdate";
import { dateFormat } from "@/common/common"; 
import { useFetch, apis } from '@/request/index'
import Button from "@/components/button";
import Spining from "@/components/spining";
 
var hmd =  `
# h1 标题
## h2 标题
### h3 标题
#### h4 标题
##### h5 标题
###### h6 标题


## 水平线

___

---

***


## 文本样式


**这是加粗的文字**  

*这是倾斜的文字*  

***这是斜体加粗的文字***  

~~这是加删除线的文字~~  


>这是引用的内容  

>>这是引用的内容  

>>>>>>>>>>这是引用的内容  


![blockchain](https://avatars.githubusercontent.com/u/31484328?v=4 "区块链")


## 列表

无序

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:   
       * Ac tristique libero volutpat at
       + Facilisis in pretium nisl aliquet
       - Nulla volutpat aliquam velit
+ Very easy!

有序

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

---
1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## 代码

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

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
        // mdc.hooks.set('postConversion', (text:any)=>{
        //     console.log({ text })
        //     return text
        // })

        // console.log(mdc, )  
        setState({ mdc : mdc.makeHtml(hmd) }) 
        // var sd = showdown.Converter()
        // setState({ mdc2 : sd.makeHtml(hmd) })
   
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
            <Card bodyStyle={{overflow:'auto'}}> 
                {
                    state.mdc && (
                        <>
                            <Button onClick={onBack}>Back</Button>
                            <div dangerouslySetInnerHTML={{__html: state.mdc }} /> 
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

                
            </Card>
        </div>
    )

})