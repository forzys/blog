



import { memo, useEffect, useRef, useMemo } from "react";
import { useFetch, apis } from '@/request/index'
import { dateFormat } from '@/common/common' 
import Spining from '@/components/spining' 
import { useUpdate } from '@/common/hooks' 
import styles from './bing.module.css'
import Pagination from "@/components/pagination";
 

export default memo((props)=>{
    const [state, setState, { params, navigate }] = useUpdate({ loading: true })

    return (
        <Spining loading={state.loading}>
            <div  className="main" style={{ background: 'rgba(0,0,0,0)'}}>
                22
            </div>
        </Spining> 
    )
})