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
 
 
 
export default memo((props)=>{

    const [https] = useFetch()
    const [state, setState, { navigate, params}] = useUpdate({
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
    
 
    useEffect(()=>{
 

        if(!params.id){
            const blog = apis.blogs.replace('$blog', state.pre);

            https.get(blog).then((res)=>{ 
                const { page, total, data: archive} = res.data;
                setState({ pages: { page: 0, total }, archive });
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

                console.log({ res })  
            });

        }


        // mdc.hooks.set('preConversion', (text:any)=>{
             
        // });
     

        console.log({ prism })  
        // setState({ mdc : mdc.makeHtml(hmd) }) 
     
    },[])

    const onSkip = (info:any) =>{

        // const archive = apis.archive?.replace('$blog', info.name)

        // setState({ loading: true });

        navigate('/blog/'+info.name)
        // https.get(archive, {type:'text'}).then((res)=>{
            // if(res.success){
            //     const md = mdc.makeHtml(res.data)
            //     state.mdc = md 
            // }
        //     console.log(res.data)
        //     setState({ loading: false, mdc: state.mdc  })
        // }); 
 
        // /blog/:id

    }

    const onBack = ()=>{
        setState({ markdown: '' })
    }

    
    return (
        <div className="main">
            {/* <Card bodyStyle={{overflow:'auto'}}>  */}
                {
                    state.markdown && (
                        <> 
                            <div className={styles.markdown} dangerouslySetInnerHTML={{__html: state.markdown }} />
                        </> 
                    )
                }

                <Spining loading={state.loading}>

                    <div style={{display: !!state.markdown ? 'none' : 'block'}}>
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