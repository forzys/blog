




import { useCallback, useLayoutEffect } from "react";


/**
 * 取色器
 * 功能： 弹出滴管取色器
 */


export function useEyeDropper() {
    const [supported, setSupported] = useState(false);

    useLayoutEffect(()=>{
        setSupported(typeof window !== 'undefined' && 'EyeDropper' in window);
    },[])
    
  
    const open = useCallback((options)=> {
        if (supported) {
            const dropper = new window.EyeDropper();
            return dropper.open(options);
        }
        return undefined;
    }, [supported]);
  

    return [supported, open];
}