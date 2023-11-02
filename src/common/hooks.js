


import { createElement, useState, useEffect  } from 'react'
import { useTimeAuto } from  '@/hooks/useTimeAuto'
import { useFullScreen } from '@/hooks/useFullscreen'
import { useHover, useClick } from  '@/hooks/useEvents'
import { useMemoize, useMemoizedFn } from  '@/hooks/useMemoize'
import { useCreation, useUpdate, useActive } from  '@/hooks/useUpdate'
import { usePagination } from  '@/hooks/usePagination'
import { useObserver } from '@/hooks/useObserver'
import { useMergedRef } from '@/hooks/useMergedRef'
import { uuid, EventBus } from './common'

 

export { 
    useClick,
    useHover, 
    useActive,
    useUpdate,
    useCreation, 
    useMergedRef,

    useObserver,
    useTimeAuto, 
    usePagination, 
    useFullScreen,  
    useMemoize, 
    useMemoizedFn,
}

// export const useFindIcon = (args, deps = {})=>{
//     return useMemoizedFn((...arg)=>{
//         const index = args?.findIndex(k=> deps[k])
//         const param = arg[index > 0 ? index : 0];
//         const fontSize = deps.fontSize || 20
//         const lineHeight = deps.lineHeight || 0
//         const strokeWidth = deps.strokeWidth || 2
//         const styles = Object.assign({ fontSize, lineHeight, strokeWidth }, deps.style)
//         return createElement('i',{ style: styles, onClick: deps.onClick }, param) 
//     })
// }

export const useUid = (name)=> {
    const [uid, setUid] = useState();
    
    useEffect(() => {
        setUid(uuid(name));
    }, []);

    return uid
}

 

export const useFindIcon = (deps={})=>{
    const {fontSize, lineHeight, strokeWidth, color, thems } = { thems:'none', color:'currentColor', fontSize: 18, lineHeight: 0, strokeWidth: 2, ...deps }

    const initSvg = {
        width:'1em', height:'1em',
        fill:thems, stroke: color,
        viewBox:'0 0 48 48', 
        strokeLinecap: 'butt', 
        strokeLinejoin:'round',
        className: deps.svgClassName,
    }

    return useMemoizedFn((args = {})=>{
        try{
            const key = Object.keys(args)?.find(k=> !!deps[k]);
            const styles = Object.assign({ fontSize, lineHeight, strokeWidth, }, deps?.style);
            const initI = { style: styles, className:deps?.className, onClick: deps?.onClick };
            const children = args?.[key]?.map((item,i)=>({...item, key: 'svg-'+i }))
            return createElement('i', initI, createElement('svg', initSvg, children))
        }catch(e){  console.log('Error:(useFindIcon):'+ String(e)); return null }
    })
}


// // 事件订阅器
// export const useGetEvent = (topic) => { 
//     const [data, setData] = useState(0);
//     EventBus.subscribe(topic, setData);
//     return data;
// };

// // 事件发布器
// export const useSetEvent = (topic, value) => {
 
//     useEffect(() => EventBus.publish(topic, value), [value]);
//     return [];
// };

// App.js
// const [count, setCount] = useState(0);
// useSetEvent("count", count);

// child.js
// const sub = useGetEvent("count");
// useEffect(() => console.log(sub), [sub]);
 