


import  { useState, useMemo, useRef, useEffect } from "react"
 

/**
 * useObserver：监听元素大小的变化
 * 功能： 元素大小发生变化执行重渲染
 */

export function useObserver() {
    const ids = useRef(0);
    const ref = useRef(null);
  
    const [rect, setRect] = useState({
        x: 0,
        y: 0,

        width: 0,
        height: 0,

        top: 0,
        bottom: 0,

        left: 0,
        right: 0, 
    });
  
    const observer = useMemo(() => {
        return new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) {
                cancelAnimationFrame(ids.current);
                ids.current = requestAnimationFrame(() => ref.current && setRect(entry.contentRect));
            }
        }); 
    }, []);

    useEffect(() => {
        ref.current && 
        observer.observe(ref.current);

        return () => {
            observer?.disconnect();
            ids.current && 
            cancelAnimationFrame(ids.current);
        }
    }, [ref.current]);
  
    return [ref, rect]
}



function MeasureExample() {
    const [entry, setEntry] = useState();
    
    const measuredRef = useCallback((node) => {
      const observer = new ResizeObserver(([entry]) => {
        setEntry(entry)
      })
  
      observer.observe(node)
      // 解绑事件
      return () => {
        observer.disconnect()
      }
    }, [])


    return [entry,measuredRef]
   
  } 