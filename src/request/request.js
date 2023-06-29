import { useEffect, useMemo, useRef } from "react"

 
export const useFetch = (props) => {
    const aborts = useRef(new Map())
    const status = useRef(new Map())
  
    useEffect(()=>{
        return ()=>{
            for(let key of status.current.keys()) {
                aborts?.current?.get(key)?.abort()
            }  
        }
    },[]);

    const http = useMemo(()=>{ 
        const getParams = (data) => Object?.keys(data)?.reduce((summ, item)=>summ + `${item}=${data[item]}`, '')
        const getPaths = (url, params) => url.includes('?') ? url + '&' + params : url + '?' + params
   
        const onAborts = (url, signal)=>{ 
            const path = signal || url

            if(!aborts.current.has(path)){
                aborts.current.set(path, new AbortController())
            } 

            const controller = aborts.current.get(path)

            if(status.current.get(path)){
                controller?.abort()
                aborts.current.set(path, new AbortController())
            }

            status.current.set(path, true);
            return aborts.current.get(path)
        } 

        return { 
            get: (url, option = {})=> new Promise((resolve)=>{
                const { data = {}, type= 'json', signal, headers } = option
                const params = getParams(data);  
                const path = params ? getPaths(url, params) : url 
                const controller = onAborts(url, signal);
 
                return fetch(path, { signal: controller.signal, headers })
                ?.then((res)=> res[type]())
                ?.then((res)=>{
                    status.current.delete(url);
                    resolve({success:true, data: res }) 
                }).catch(e=>{
                    status.current.delete(url);
                    resolve({success: false, data: null}) 
                })
            }),

            post:()=>{}, 
        }
    },[]);

    return [http];
}