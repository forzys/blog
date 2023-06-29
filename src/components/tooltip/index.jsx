
import React, { memo, useLayoutEffect, useMemo, useRef, useState } from "react"; 
import { useUpdate, useHover } from "@/common/hooks";
import './index.css'


export default memo((props)=>{ 
    const [active, setActive] = useUpdate({})
    const [hoverRef, hovered] = useHover();
    const labelRef = useRef(null);
    const timer = useRef(null);

    useLayoutEffect(()=>{
        if(hoverRef.current && hovered && !props.disabled){
            const element = hoverRef.current
            const contain = labelRef.current
 
            const elementRect = element.getBoundingClientRect();
            const containRect = contain.getBoundingClientRect();  
 
            const elementValue = element.offsetWidth / elementRect.width;
            const containValue = contain.offsetWidth / containRect.width;
 
            const elementWidth = elementRect.width * elementValue || 0;
            const containWidth = containRect.width * containValue || 0; 
   
            const WRAPPER_PADDING = 4;
 
            setActive({
                opacity: 1,
                hovered: true,
                top: element.offsetTop - containRect.height - WRAPPER_PADDING,
                left:element.offsetLeft + elementWidth / 2 - containWidth / 2,
            });
        }
        
        if(hoverRef.current && !hovered && !props.disabled) {
            setActive({ opacity: 0 }); 
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(()=>{ 
                setActive({ hovered: false });
            }, 300) 
        }
    },[hovered, props.disabled]) 


    const hoverStyle = useMemo(()=>{ 
        return {
            transitionProperty: 'opacity',
            transitionDuration: '250ms',
            transitionTimingFunction: 'ease',
            opacity: active.opacity,
            top: active.top,
            left: active.left,
            zIndex: 300,
        }
    },[active])

    return (
        <React.Fragment>
            <span ref={hoverRef}>
                {props.children}
            </span>

            {
                !props.disabled && !!(hovered || active.hovered) && (
                    <div ref={labelRef} className="tooltip" style={hoverStyle}>
                        {props.label}
                    </div>
                )
            }
        </React.Fragment>
    )

})