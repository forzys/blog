





import { useMemoizedFn } from '@/common/hooks' 
import { useRef, useLayoutEffect, memo } from 'react'
 

export default memo((props) => {
    const [baseWidth, baseHeight] = [960, 600];
    const drawer = useRef(null)
    const drawing = useRef(null)
	 
    const onRateChange = useMemoizedFn(() => {
        if(drawer?.current) {
            const baseRate = parseFloat((baseWidth / baseHeight).toFixed(5));
            const initRate = parseFloat((window?.innerWidth / window?.innerHeight)?.toFixed(5));
            const scale = {}
            if (initRate > baseRate) {
                scale.width  = ((window?.innerHeight * baseRate) / baseWidth).toFixed(5)
                scale.height = (window?.innerHeight / baseHeight).toFixed(5)
                drawer.current.style.transform = `scale(${scale?.width}, ${scale?.height}) translate(-50%, -50%)`
            } else {
                scale.height = ((window?.innerWidth / baseRate) / baseHeight).toFixed(5)
                scale.width  = (window?.innerWidth / baseWidth).toFixed(5)
                drawer.current.style.transform = `scale(${scale?.width}, ${scale?.height}) translate(-50%, -50%)`
            }
        }
    })

    const resize = useMemoizedFn(() => {
        clearTimeout(drawing?.current);
        drawing.current = setTimeout(onRateChange, 200)
    });
    
    useLayoutEffect(()=>{
        if(props.open !== false){
            onRateChange();
            window?.addEventListener('resize', resize);
        }
        return ()=> window?.removeEventListener('resize', resize)
    },[props.open])

    return (
        <div id={props?.id || 'draw'} onClick={props.onChange} className={props?.className} ref={drawer} style={{ width: baseWidth, height: baseHeight, ...props?.style }}>
            {props?.children}
        </div>
    )
})
  