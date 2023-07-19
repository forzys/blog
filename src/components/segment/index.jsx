




import { memo, useState, useLayoutEffect, useRef, useEffect, useCallback } from "react"
import { useUid, useActive, useObserver, useCreation, useMemoizedFn } from '@/common/hooks' 
import './index.css'

 
const onGetDefault = (arrs)=>{
    const [first] = arrs
    return Array.isArray(arrs) ? arrs.find((i) => !i.disabled)?.value ?? first?.value ?? first ?? null : null
} 

export default memo((props)=>{ 
    const [position, setPosition] = useState({
        width: 0,
        height: 0,
        translate: [0, 0],
    });
 
    const [active, setActive] = useActive({
        init: props.init || onGetDefault(props.options),
        value: props.value, 
        onChange: props.onChange,
    });

    const [animate, setAnimate] = useState(false); 
    const [observerRef, containerRect] = useObserver()

    const uid = useUid('seg')
    const refs = useRef({})
    const mounted = useRef();

    useEffect(()=>{ 
        setActive(props.init || onGetDefault(props.options));
    },[props.init, props.options])
  
    useLayoutEffect(()=>{
        if (!mounted.current) {
            mounted.current = true;
            setAnimate(false);
        } else {
            !animate && setAnimate(true);
        }
    },[]);

    // const segment = useCreation(()=>{
    //     return props.options?.map((i, j)=>{
    //         const item = typeof i === 'string' ? { label: i, value: i } : i
    //         return (
    //             <div className="segment-item" key={item.value}>
    //                 <input
    //                     name={uid}
    //                     disabled={props.disabled || item.disabled}
    //                     type="radio"
    //                     value={item.value}
    //                     id={`${uid}-${item.value}`}
    //                     className="segment-item-input"
    //                     checked={active === item.value}
    //                     onChange={() => setActive(item.value)}
    //                 />

    //                 <label
    //                     className='segment-item-label'
    //                     style={{ '--segment-font': props.fontSize }}
    //                     data-active={(active === item.value && !(props.disabled || item.disabled)) || undefined}
    //                     data-disabled={props.disabled || item.disabled || undefined}
    //                     htmlFor={`${uid}-${item.value}`}
    //                     ref={(node) => refs.current[item.value] = node}
    //                 >
    //                     {item.label}
    //                 </label>
    //             </div>
    //         )
    //     })
    // },[props.options, props.fontSize, active])


    useEffect(() => {
        if (active in refs.current && observerRef.current) {
            const element = refs.current[active];
            const elementRect = element.getBoundingClientRect();
            const scaledValue = element.offsetWidth / elementRect.width;
            const width = elementRect.width * scaledValue || 0;
            const height = elementRect.height * scaledValue || 0;
            const WRAPPER_PADDING = 4

            const offsetRight =
                containerRect.width - element.parentElement.offsetLeft + WRAPPER_PADDING - width;
            const offsetLeft = element.parentElement.offsetLeft - WRAPPER_PADDING;
        
            setPosition({
                width,
                height,
                translate: [
                    position.dir === 'rtl' ? offsetRight : offsetLeft,
                    element.parentElement.offsetTop - WRAPPER_PADDING,
                ],
            });
        }
      }, [active, containerRect]);

 
    const activeStyle = useCreation(()=>{
        return {
            width: position?.width,
            height:position?.height,
            transform:`translate(${position.translate[0]}px, ${position.translate[1]}px)`,
        }
    },[position])


    const onChange = useCallback((item)=>{ 
        setActive(item.value); 
        props?.onChange?.(item.value, item);
    },[])
 
    return (
        <div className={props.className}>

            <div className="segment" ref={observerRef} onClick={e=>e.stopPropagation()} style={props?.style}>
                <span className="segment-active" style={activeStyle} />
                {
                    props.options?.map((i, j)=>{
                        const item = typeof i === 'string' ? { label: i, value: i } : i
                        return (
                            <div className="segment-item" key={item.value}>
                                <input
                                    name={uid}
                                    disabled={props.disabled || item.disabled || undefined}
                                    type="radio"
                                    value={item.value}
                                    id={`${uid}-${item.value}`}
                                    className="segment-item-input"
                                    checked={active === item.value}
                                    onChange={onChange.bind(null, item)}
                                />
                                <label
                                    className='segment-item-label'
                                    style={{ '--segment-font': props.fontSize }}
                                    data-active={(active === item.value && !(props.disabled || item.disabled)) || undefined}
                                    data-disabled={props.disabled || item.disabled || undefined}
                                    htmlFor={`${uid}-${item.value}`}
                                    ref={(node) => refs.current[item.value] = node}
                                >
                                    {item.label}
                                </label>
                            </div>
                        )
                    })
                }
            </div>

        </div>
     
    )
})