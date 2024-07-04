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
import Xml2json from '@/application/xml2json' 
import styles from './index.module.css' 
 
import '../../styles/markdown.css'
import '../../styles/code.css'

const subscribe = [
    {
        id: 'rss01',
        title: '2020每日时报',
        intro: '每日时报，会以前端技术体系为主要分享课题。内容会以：文章、工具、新闻、视频几大板块作为主要分类。',
        src: "https://wubaiqing.github.io/zaobao/rss.xml",
    }
]
 
export default memo((props)=>{
    const [https] = useFetch()
    const [state, setState, { navigate, params, location }] = useUpdate({
        pre: 'blog',
        loading: true,
        pages:{
            page: 0,
            total:'',
        },
    })
   
    const converter = useMemo(()=> {
        const converter = new Markdown.Converter()
        converter.hooks.set('postCodeGamut', (text:any, language:any)=>{
            const grammar = prism?.languages?.[language] || prism?.languages?.js
            return prism.highlight(text, grammar, language|| 'js') || text
        })
        return converter 
    },[]) 
 
    const onGetDetail = ()=>{
        const archive = apis.archive.replace('$blog', params.id); 

        https.get(archive, {type:'text'}).then((res)=>{ 
            if(res.success){
                const markdown = converter.makeHtml(res.data)
                state.markdown = markdown 
            }
            setState({ loading: false, markdown: state.markdown  })

        }); 
    }
 
    useEffect(()=>{   
        onGetDetail()
  
    },[]) 
    
 
    return (
        <div className="main"> 
            <Spining loading={state.loading}>  
                {
                    state.markdown 
                    ? <div className={styles.markdown} dangerouslySetInnerHTML={{__html: state.markdown }} /> 
                    :(
                        <article className="blog-item" style={{ background:'#fff',padding:'12px', minHeight: 66, borderRadius: 6}}> 
                            <aside style={{color: 'rgba(0,0,0,0.8)', fontSize: 14}}>{'加载中...'}</aside>
                        </article>
                    )
                }
            </Spining>
        </div>
    )

})