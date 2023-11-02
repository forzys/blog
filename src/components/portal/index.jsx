import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from 'react-dom';
 
 
export default function ActivePortal(props) { 
    const ref = useRef();
    const [mounted, setMounted] = useState(false);
   
    useLayoutEffect(() => {
        setMounted(true);

        ref.current = !props.target
        ? document.createElement('div')
        : typeof props.target === 'string'
        ? document.querySelector(target)
        : props.target;

        !props.target && 
        document.body.appendChild(ref.current);

        return () => !props.target && 
        document.body.removeChild(ref?.current);

    }, [props.target]);

    if (!mounted) { return null }

    return createPortal(<div className={props.className} ref={props.innerRef}> {props.children} </div>, ref.current);
}