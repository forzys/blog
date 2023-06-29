import { memo, useLayoutEffect, useRef, useMemo } from "react";
import ActivePortal from '@/components/portal'
import Input from "@/components/input";
import Button from "@/components/button";
import { Symbol } from '@/components/icons' 
import { useUpdate, useHover, useMemoizedFn } from "@/common/hooks";
import './index.css'
 
export default memo((props)=>{ 
    const [hoverRef, hovered] = useHover();
    const [state, setState] = useUpdate({});
    const [position, setPosition] = useUpdate({});
    const timer = useRef(null);
   
    const onExtraChange = useMemoizedFn(()=>{
        if(hovered && props.clearable){
            return console.log('clear')
        }
        console.log('open')
    })


    useLayoutEffect(()=>{
        if(hoverRef.current && state?.open && !props.disabled){
            const element = hoverRef.current
            // const contain = labelRef.current
 
            const elementRect = element.getBoundingClientRect();
            // const containRect = contain.getBoundingClientRect();  
 
            // const elementValue = element.offsetWidth / elementRect.width;
            // const containValue = contain.offsetWidth / containRect.width;
 
            // const elementWidth = elementRect.width * elementValue || 0;
            // const containWidth = containRect.width * containValue || 0; 
   
            const WRAPPER_PADDING = 4;
  
          
            setPosition({
                opacity: 1,
                hovered: true,
                width: elementRect.width - 4,
                top: elementRect.top + elementRect.height + WRAPPER_PADDING,
                left: elementRect.left + 2,
            });
        }
        
        if(hoverRef.current && !state.open && !props.disabled) {
            setPosition({ opacity: 0 });
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(()=>{ 
                setPosition({ hovered: false });
            }, 300) 
        }
        return ()=>{
            state.timer && clearTimeout(state.timer)
        }
    },[state?.open, props.disabled]) 


    const onDropDownOpen = useMemoizedFn(()=>{
        console.log('open', hoverRef.current)
  
        setState({ open: !state.open })
    })


    const onDropDownClose = ()=>{
        state.open && setState({ open: false })
    }

    const onActiveSelect = useMemoizedFn((info)=>{
        console.log('click', info)

        setState({ active: info.label })

    }) 

    const hoverStyle = useMemo(()=>{ 
        return {
            transitionProperty: 'all',
            transitionDuration: '350ms',
            transitionTimingFunction: 'ease',
            opacity: position.opacity,
            transform: position.opacity? 'scaleY(1)' : 'scaleY(0.8)',
            transformOrigin: '0% 0%',
            overflow:'hidden', 
            zIndex: 300, 
            width: position.width,
            top: position.top,
            left: position.left,
        }
    },[position])

    console.log('HOVERD:',hovered)

    return (
        <div onClick={(e)=>e.stopPropagation()} ref={hoverRef}> 
            <Input
                placeholder="please select"
                type="search"
                after={(
                    <Button type="text" compact onClick={onExtraChange}>
                        {
                            hovered && props.clearable ?
                            <Symbol close-o thems="rgba(0,0,0,0.45)" color="#ccc" fontSize="13px" />:
                            <Symbol down color='rgba(0,0,0,0.25)' />
                        } 
                    </Button>
                )}
                readOnly
                inputClass="select-input"
                // ref={inputRef}
                onBlur={onDropDownClose}
                open={state?.open || undefined}
                onClick={onDropDownOpen} 
                value={state?.active || ''}
            />

            <ActivePortal> 
                <div className="select-dropdown" style={{ display: (state?.open || position?.hovered) ? 'block' : 'none',...hoverStyle,}}>
                    <div style={{ maxHeight:'13rem',display:'flex' }}>

                        <div style={{ position:'relative', width: '100%', flex: 1}}>
                            <style>{`[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`}</style>

                            <div className="select-box" data-radix-scroll-area-viewport style={{ overflow:'scroll'}}>
                                <div style={{ display:'table', minWidth:'100%'}}>
                                    <div style={{display:'flex',width:'100%', flexDirection:'column',padding:'0.25rem'}}>
                                        {
                                            props.option?.map(item=>{
                                                return (
                                                    <div
                                                        className="select-item"
                                                        key={item.value || item.label}
                                                        data-disabled={item.disabled || undefined}
                                                        data-active={String(state.active)?.includes(item.value) || undefined}
                                                        onClick={!item.disabled ? onActiveSelect.bind(null,item): undefined }
                                                    >
                                                        <span>{item.label}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </ActivePortal> 
        </div>  
    )
})