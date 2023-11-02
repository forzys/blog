


import { memo, useEffect, useRef, useMemo } from "react";
import { useFetch, apis } from '@/request/index'
import { dateFormat } from '@/common/common' 
import Spining from '@/components/spining' 
import { useUpdate } from '@/common/hooks' 
import styles from './bing.module.css'
import Pagination from "@/components/pagination";
 
// interface ImagesObserverProps {
//     children: React.ReactNode;
// }
 
const useImagesObserver = (props:any)=>{
    const ref = useRef<HTMLDivElement>(null)

    const observer = useMemo(()=> new IntersectionObserver((entries, self) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let img = entry.target?.firstChild as HTMLImageElement
 
                let src = img?.dataset.src
                if (src) {
                    img.src = src
                    img.removeAttribute('data-src')
                }
                self.unobserve(entry.target)
            }
        })
      } ),[])


    useEffect(()=>{ 
        const current:any = ref.current 
        current?.children.length &&
        Array.from(current?.children)?.forEach((item:any)=>{ 
            observer.observe(item)
        });

        return ()=>{
            const current:any = ref.current; 
            current?.children.length &&
            Array.from(current?.children)?.forEach((item:any)=>{
                observer.unobserve(item)
            });
        }
    },[ref?.current, props])
     
    return [ref] 
}
 


export default memo((props)=>{ 
    const [https] = useFetch();
    const [state, setState, { params, navigate }] = useUpdate({ loading: true })
    const [imgs] = useImagesObserver(state.wallpapers)
      

    useEffect(()=>{
        const id = ((params?.id || 1)  - 2) * -1;
        const now = new Date()
        const year = now.getFullYear();
        const month = ('00' + (now.getMonth() + id)).slice(-2)
        const beforeDay = dateFormat(year+ '/'+ month + '/01').format('YYYYMM');  
        const path = apis.bingbz.replace('$var', beforeDay) 

        
        if(now.getMonth() <= -1 || params?.id > (now.getMonth() + 1)){
            navigate('/plugins/wallpaper')
            return
        }

        setState({ loading: true, total: now.getMonth() + 1, page: params?.id || 1  });

        https.get(path).then((res)=>{
            setState({ wallpapers: res.data, loading: false })
        });

        return ()=> {}
    },[params?.id])

    const onPageChange = (page:number|string|undefined)=>{ 

        document.querySelector('#root')?.scrollTo({ top: 0 })

        navigate('/plugins/wallpaper/'+ (page || 1))  
    }
 
 
    return (
        <Spining loading={state.loading}>
            <div className="main" style={{ background: 'rgba(0,0,0,0)'}}>
                <div className={styles.imageList} ref={imgs}>
                    {
                        state?.wallpapers?.map((item:any)=>{
                            return (
                                <div className={styles.imageBox} key={item?.date}>
                                    <img className={styles.image} src='' data-src={item?.image_url} style={{ height: '50vh'}} />
                                    <footer>{item?.title}</footer>
                                </div> 
                            )
                        })
                    }

                    <footer>
                        <Pagination total={state?.total || 1} page={state.page || 1} onChange={onPageChange} />
                    </footer>
                </div>
            </div>
        </Spining>
       
       
    )
})