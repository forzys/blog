 
import { memo, useCallback, useEffect, useLayoutEffect } from "react"; 
import Input from '@/components/input'
import Button from '@/components/button'
import { Search } from '@/components/icons' 
import Stretch from '@/components/stretch' 
import Spining from '@/components/spining'  
import { useMemoizedFn, useFullScreen, useCreation, usePagination, useUpdate } from '@/common/hooks' 
import { useFetch, apis } from '@/request/index'
import Group from "@/components/group";
import Tooltip from '@/components/tooltip'
import Card from "@/components/card";
import './index.css'
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

 
 
    return (
        <div className="main">
            <Card 
                bodyClassName="themes-box" 
                headerStyle={{paddingBottom:6}} 
                bodyStyle={{ paddingBottom: 0, paddingTop: 0}} 
                title="主题色搭配"
            >
                <Segment 
                    fontSize="0.5rem"
                    onChange={onTypeChange}
                    options={[ 
                        {label: 'New', value: 'new'},
                        {label: 'Popular', value: 'popular'},
                    ]}
                    className="themes-segment"
                />

                <Spining loading={state?.loading} style={{flex: 1}}> 
                    <div className="themes">
                        {
                            state?.themes?.map((item:any)=>{
                                const paint = paintPalette(item.code)
                                return (
                                    <div key={item.code} className="theme">
                                        {paint.map((color:string)=>{
                                            return (
                                                <div key={color} className="item" style={{ background:color, '--color': color } as any}>
                                                    <span>{color}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        } 
                    </div>
                </Spining>
                 
                <div className="themes-footer">
                    <Pagination total={13} page={Number(state.page) + 1} onChange={onPageChange} />
                </div> 
            </Card> 

        </div>
    )

})