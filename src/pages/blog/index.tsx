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
 
    const onGetBlogList = ()=>{
        const blog = apis.blogs.replace('$blog', state.pre);

        https.get(blog).then((res)=>{ 
            const { page, total, data: archive} = res.data;
            setState({ pages: { page: 0, total }, archive, loading: false });
        }); 
    } 
 
    useEffect(()=>{ 
        onGetBlogList()
    },[])


    const onSkip = (info:any) =>{
        navigate('/blog/'+info.name) 
    }
   
    return (
        <div className="main"> 
            <Spining loading={state.loading}> 
                <div style={{ display:'flex', flexDirection:'column', gap: 12,  }}>
                    {
                        state?.archive ?
                        state?.archive?.map((item:any, i: number)=>{
                            return (
                                <article key={item?.id} className="blog-item" style={{ background:'#fff',padding:'12px', borderRadius: 6}}>
                                    <h3><a style={{cursor:'pointer'}} onClick={onSkip.bind(null,item)}>{item?.title || '...'}</a></h3>
                                    <div className={styles.intro}>
                                        <p>{item?.intro?.length > 150 ? item?.intro?.slice(0,150)+'...' : item?.intro}</p> 
                                        <p className={styles.earser}>
                                            <span className={styles.text} style={{['--delay']: (i * 0.15) +'s' }}>
                                                {item?.intro?.length > 150 ? item?.intro?.slice(0,150)+'...' : item?.intro}
                                            </span>
                                        </p> 
                                    </div>
                                    <footer style={{fontSize: 12, marginTop: 12}}>{dateFormat(item?.updated).format('YYYY-MM-DD hh:mm:ss')}</footer> 
                                </article>
                            )
                        }): (
                            <article className="blog-item" style={{ background:'#fff',padding:'12px', minHeight: 66, borderRadius: 6}}> 
                                <aside style={{color: 'rgba(0,0,0,0.8)', fontSize: 14}}>{'加载中...'}</aside>
                            </article>
                        )
                    }
                </div> 
            </Spining> 
        </div>
    )

})