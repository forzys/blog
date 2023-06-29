
import { useState, useEffect, useRef,useMemo, useCallback } from 'react';




/**
 * useHover： 监听元素 hover 返回状态
 * useClick： 监听元素 click 返回点击点
 */

export function useHover(){
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);
  
    const onMouseEnter = useCallback(() => setHovered(true), []);
    const onMouseLeave = useCallback(() => setHovered(false), []);

    useEffect(() => {
        if(ref.current) {
            ref.current.addEventListener('mouseenter', onMouseEnter);
            ref.current.addEventListener('mouseleave', onMouseLeave);

            return () => {
                ref.current?.removeEventListener('mouseenter', onMouseEnter);
                ref.current?.removeEventListener('mouseleave', onMouseLeave);
            };
        }
        return undefined;
    }, []);

    return [ref, hovered]
}



// export function useClickPoint() {
//     const point = useRef(null);
//     const clickRef = useRef(null);
  
//     useEffect(() => {
//         function handleClick(e) {
//             point.current = { x: e.pageX, y: e.pageY } 
//             setTimeout(() => (point.current = null), 100);
//         }
  
//         const node = clickRef.current;
//         node.addEventListener('click', handleClick);
    
//         return () => {
//             node.removeEventListener('click', handleClick);
//         };
//     }, []);
  
//     return [clickRef, point?.current];
// }


export function useClick(sure){
    const ref = useRef(null);
    const point = useRef(null);

    const id = useMemo(()=> Math.floor(Math.random() * 100000) ,[])
 
    useEffect(()=>{
        const onHandleClick = (e) => {
            point.current = { x: e.pageX, y: e.pageY } 
            console.log(id, point.current);
            setTimeout(()=> point.current = null, 100);
        };

        // const node = clickRef.current;
        // node.addEventListener('click', handleClick, true);

        document.documentElement.addEventListener('click', onHandleClick, true);
        return ()=>{
            document.documentElement.removeEventListener('click', onHandleClick, true)
        };
    },[ref.current])

    return point.current
}



