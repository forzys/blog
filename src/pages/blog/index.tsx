import Card from "@/components/card";
import { memo, useEffect, useMemo } from "react"; 
import Markdown from '@/application/Markdown'
import { useUpdate } from "@/hooks/useUpdate";
import { dateFormat } from "@/common/common"; 
import { useFetch, apis } from '@/request/index'
import Button from "@/components/button";
import Spining from "@/components/spining";

var hmd = `


<!-- config: { "id": "diary-2304", "title": "工作日记-23年4月", "created_at": "2023-04-30T23:59:59Z" } --> 
<!-- intro: 迁移记录的23年4月godigitalchina工作日记 -->
<!-- gitblog: https://github.com/yihong0618/gitblog -->

## ABCD

[中国色](http://zhongguose.com/#beiguahuang)

  
<marquee> 表格 标签 </marquee>  

|  表头   | 表头  | 表头 | 表头 |
| :---  | ---:  | :--: | ---- |
| 单元格  | 单元格 |单元格|单元格|
| 单元格  | 单元格 |单元格|单元格|

>生活很困难
但仍要继续下去
加油朋友  

加油朋友

<kbd> Ctrl </kbd>


`

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
            <Card> 
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