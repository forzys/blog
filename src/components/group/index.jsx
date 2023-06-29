import { memo, Children } from "react";
import { classes } from '@/common/common'
import './index.css'


export default memo((props)=>{ 
    return (
        <div 
            className={classes("group", props.className)} 
            style={props.style} 
            onClick={e=>[e?.stopPropagation(), props?.onClick?.(e)]}
        >
            {Children?.toArray(props.children).filter(Boolean)}
        </div>
    )
})