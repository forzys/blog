 
import { memo, useCallback, useEffect, useLayoutEffect } from "react"; 
import Input from '@/components/input'
import Button from '@/components/button' 
import Spining from '@/components/spining'  
import { useMemoizedFn, useFullScreen, useCreation, usePagination, useUpdate } from '@/common/hooks' 
import { useFetch, apis } from '@/request/index'
import Group from "@/components/group";
import Tooltip from '@/components/tooltip'
import Card from "@/components/card";
import styles from './index.module.css'
import Segment from "@/components/segment";
import Pagination from '@/components/pagination'

  
export default memo((props)=>{
    const [https] = useFetch()
    const [state, setState, { navigate }] = useUpdate({
        type: "new",
        page: 0,
        loading: true,
    }); 
   
    useEffect(()=>{
        // 初始化 获取数据
        onFetchThemes(state.type, state.page);
 
    }, [])


    function onFetchThemes(type:string, page:number|string){

        return new Promise((resolve)=>{
            if(Number(page) < 0){
                return resolve(false)
            }

            const name = type + '_' + page
            const path = apis.themes.replace('$type', type)?.replace('$var', name)
     
            https.get(path, { signal: 'theme' }).then((themes)=>{
                setState({ themes: themes.data, loading: false })
                resolve(true)
            })
        })
    }


    const paintPalette:any = useMemoizedFn((code: string):string[]=>{
        const paint = []
        let i = 0;
        while (i < 4) {
            paint.push('#'+code.substring(i*6, i*6+6))
            i++;
        }
        return paint
    });

    const onPageChange = useMemoizedFn((page:number|string)=>{ 
        setState({ loading: true, page: Number(page) -1  })
        // 切换页码 
        onFetchThemes(state.type, Number(page) - 1)
    });

    const onTypeChange = useMemoizedFn((type:any)=>{
        setState({ loading: true, type: type, page: 0 })
        // 切换类型 
        onFetchThemes(type, 0)
    });

    const onUseColor:any = useMemoizedFn((info:any[])=>{
     
        const body = document.body;

        // const colors = ['--bg-0', '--bg-30', '--bg-60', '--bg-100']
 
        const [color0, color30, color60, color100] = info
 
        body.style.setProperty('--bg-0', color0);
        body.style.setProperty('--bg-30', color30);
        body.style.setProperty('--bg-60', color60);
        body.style.setProperty('--bg-100', color100);
    })
 
 
    return (
        <div className="main">
            <Segment 
                fontSize="0.5rem"
                onChange={onTypeChange}
                options={[ 
                    {label: 'New', value: 'new'},
                    {label: 'Popular', value: 'popular'},
                ]} 
                className={styles.segment} 
            />

            <Spining loading={state?.loading} style={{ flex: 1}}> 
                <div className={styles.themes}>
                    {
                        state?.themes?.map((item:any, idx:number)=>{
                            const paint = paintPalette(item.code)
                            return (
                                <div key={item.code} className={styles.theme} style={{ '--delay': idx % 4 } as any}>
                                    {paint.map((color:string, index:number)=>{
                                        return (
                                            <div key={color} className={styles.item +' ' + styles['color' + index]} style={{ background:color }}>
                                                <span>{color}</span> 
                                            </div>
                                        )
                                    })}
                                    <Tooltip label="再次点击切换顺序">
                                        <span className={styles.usefull} onClick={onUseColor.bind(null,paint)}>Use</span>
                                    </Tooltip>
                                    
                                </div>
                            )
                        })
                    } 
                </div>
            </Spining>
                
            <div  className={styles.footer}>
                <Pagination total={13} page={Number(state.page) + 1} onChange={onPageChange} />
            </div>  
        </div>
    )

})