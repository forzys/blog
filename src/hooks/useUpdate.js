

import { useRef, useState } from "react";
import { useMemoizedFn } from "./useMemoize";
import { useNavigate,useParams,useLocation } from 'react-router-dom'
 


const depsAreSame = (oldDeps, deps) => { 
    if(oldDeps === deps) return true;
    for(let i = 0; i < oldDeps.length; i++) { 
        if(!Object.is(oldDeps[i], deps[i])) return false
    }
    return true
}



/**
 * useCreation： = useMemo
 * useUpdate： = useState
 * useActive： = 外部可接管控制器  传入value则 【value onChange控制】 或 内部控制
 */

export const useCreation = (fn, deps)=> {
    const { current } = useRef({ 
        deps,
        obj:undefined,
        initialized: false
    });

    if(current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = fn();
        current.initialized = true;
    }
    
    return current.obj
}


export const useUpdate = (initialState)=> {
    const navigate = useNavigate()
    const pathInfo = useParams()
    const location = useLocation()
    const [state, setState] = useState(initialState);

    const onForceUpdate = useMemoizedFn((...[partial, delay]) => {
        return new Promise((resolve)=>{
            let forces
            setState((current)=>{
                const params = typeof partial === 'function' ? partial(current) : partial;
                forces = { ...current, ...params };
                return forces
            }),resolve(forces);  
        })
    });

    return [state, onForceUpdate, { navigate, params:pathInfo, location }];
}


export const useActive = ({ value, init, final, onChange }) => { 
    const [active, setActive] = useState(init !== undefined ? init : final);

    const onHandleChange = (e) => {
        setActive(e);
    };
 
    if (value !== undefined) {
        return [value, onChange, true];
    }

    return [active, onHandleChange, false];
}

export default useCreation