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
import Segment from "@/components/segment";
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

    const xmls = useMemo(()=> { 
        return new Xml2json() 
    },[])
    
    useEffect(()=>{
        if(params.id === '2020每日时报'){
            setState({  markdown: null });
        } 
    },[location.pathname])
 
    useEffect(()=>{  
       
        const [,type, type1] = location?.pathname?.match(/\/(.*?)\/|\/(.*?)$/) || []
 
        state.isRss = (type || type1) === 'rss';
       
        if(state.isRss){
            console.log({ state , params  })
            setState({ isRss: state.isRss, markdown: null });

            if(params.id === '2020每日时报'){
                setState({  loading: true });
                const path = subscribe.find(i=> i?.title === params.id)?.src
                path ? https.get(path, {type: 'text'}).then((res)=>{ 
                    const  data = res.data;
                    const info = xmls.xml_str2json(data) 
                    setState({ xssInfo: info?.rss?.channel, loading: false  });
                }): setState({  loading: false  });
            } 
 
            return ()=>null
        }


        if(!params.id){
            const blog = apis.blogs.replace('$blog', state.pre);

            https.get(blog).then((res)=>{ 
                const { page, total, data: archive} = res.data;
                setState({ pages: { page: 0, total }, archive, rss: null });
            });
        }else{ 
            const archive = apis.archive.replace('$blog', params.id);

            setState({ loading: true });

            https.get(archive, {type:'text'}).then((res)=>{
 
                if(res.success){
                    const markdown = converter.makeHtml(res.data)
                    state.markdown = markdown 
                }
                setState({ loading: false, markdown: state.markdown  })
 
            }); 
        }
 
        // setState({ mdc : mdc.makeHtml(hmd) })
    },[])


    const onSkip = (info:any) =>{
        navigate('/blog/'+info.name) 
    }
    const onSkip2 = (info:any) =>{
        if(info?.description){
            setState({ markdown: info?.description })
        }

        navigate('/rss/'+info.title?.replace(/\./g,'_'))
       
    }

    const onTypeChange = (info:any) =>{
        navigate('/'+info) 
    }
 
    const init = useMemo(()=> {
        const [, type, type1] = location?.pathname?.match(/\/(.*?)\/|\/(.*?)$/) || []
        return type || type1|| 'blog'
    },[]);
    

    console.log({ init, state })

    return (
        <div className="main">
            
            <Segment 
                fontSize="0.5rem"
                init={init}
                onChange={onTypeChange}
                options={[ 
                    {label: 'Blog', value: 'blog'},
                    {label: 'RSS', value: 'rss'},
                ]} 
                // className={styles.segment} 
            />

                {
                    state.markdown && (
                        <> 
                            <div className={styles.markdown} dangerouslySetInnerHTML={{__html: state.markdown }} />
                        </> 
                    )
                }

                <Spining loading={state.loading}>

                    <div style={{display: !!state.markdown || state?.isRss ? 'none' : 'block'}}>
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

                    <div style={{display: state?.isRss && !state?.xssInfo && !state.markdown ? 'block' : 'none'}}>
                        {
                            subscribe?.map((item:any)=>{ 
                                return (
                                    <article key={item?.id} className="blog-item">
                                        <h2><a style={{cursor:'pointer'}} onClick={onSkip2.bind(null,item)}>每日时报</a></h2>
                                        <aside>{item?.intro?.slice(0,50)+'...'}</aside>
                                        <footer>{dateFormat(item?.updated).format('YYYY-MM-DD hh:mm:ss')}</footer> 
                                    </article>
                                )
                            })
                        } 
                    </div>

                    <div style={{display: state?.isRss && state?.xssInfo && !state.markdown ? 'block' : 'none'}}>
                        {
                            state?.xssInfo?.item?.map((item:any)=>{ 
                                return (
                                    <article key={item?.id} className="blog-item">
                                        <h2><a style={{cursor:'pointer'}} onClick={onSkip2.bind(null,item)}>{item?.title}</a></h2>
                                        {/* <aside> <div dangerouslySetInnerHTML={{__html:item.description}} /> </aside> */}
                                        <footer>{dateFormat(item?.pubDate).format('YYYY-MM-DD hh:mm:ss')}</footer> 
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