




import { useRef, useEffect } from 'react';




export function useMergedRef(outRef) {
    const innerRef = useRef();

    useEffect(() => {
        if (typeof outRef === 'function') {
            outRef(innerRef.current);
        } else if (outRef) {
            outRef.current = innerRef.current;
        }
    }, [outRef]);

    return innerRef;
}