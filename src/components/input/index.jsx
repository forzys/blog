import { classes } from "@/common/common";
import { memo, useCallback, useLayoutEffect, useMemo, useRef } from "react";
import './index.css' 
import { useUpdate, useCreation, useMemoizedFn } from "@/common/hooks";



export default memo((props)=> {
    const refs = useRef({})
    const [state, setState] = useUpdate({})
  
    useLayoutEffect(()=>{
        if(!!refs.current.after){
            const element = refs.current.after;
            const rect = element.getBoundingClientRect();
            state.afterPadding = `calc(${rect?.width}px + 0.35rem)`; 
        } 
        if(!!refs.current.before){
            const element = refs.current.before;
            const rect = element.getBoundingClientRect();
            state.beforePadding = `calc(${rect?.width}px + 0.35rem)`; 
        }
        // !!(refs.current.after || refs.current.before) && setState({ ...state }), console.log('Update Input of EFF');
    },[props.after, props.before])
  
    const styles = useMemo(()=>{
        return {
            paddingLeft: state.beforePadding || undefined,
            paddingRight: state.afterPadding || undefined, 
            ...props.style,
        }
    },[state.beforePadding, state.afterPadding, props.style])
 
    const onChange = useCallback((name, e)=>{
        e.stopPropagation(); 
        !!(props[name]) && props?.[name]?.(e)
    },[]);

    console.log('IPUT',{ props,  })


    return (
        <div
            onClick={e=> e?.stopPropagation()} 
            data-disabled={props.disabled || undefined}
            className={classes('input-wrap', props.className)} 
            style={props.wrapStyle}
        >
            {
                !!props.before &&
                <div ref={node=> refs.current.before = node} className={classes('input-before', props.beforeClass)}>
                    {props.before} 
                </div>
            }

            <input
                className={classes('input-input', props.inputClass)} 
                placeholder={props.placeholder}
                
                data-before={!!props.before || undefined}
                data-after={!!props.after || undefined}
                data-borderless={!!props.borderless || undefined}
                data-open={!!props.open || undefined}
               
                style={styles}
                type={props.type || undefined}
                readOnly={props.readOnly}
                autoComplete="off"
                // ref={innerRef}
                value={props.value}
                onClick={props?.onClick}
                onBlur={props.onBlur}
                onChange={onChange.bind(null, 'onChange')} 
                onInput={onChange.bind(null, 'onInput')} 
            />

            {
                !!props.after &&
                <div ref={node=> refs.current.after = node} className={classes('input-after', props.afterClass)}>
                    {props.after} 
                </div>
            }
        </div>
    )

})

