import { memo } from 'react'
import { classes } from '@/common/common'
import './index.css'
 
export default memo((props)=>{
    return (
        <div className={classes('card', props.className)}  style={props.style}> 
            <div className={classes('card-header', props.headerClassName)} style={props.headerStyle}>
                {props.title}
            </div>
            <div className={classes('card-body', props.bodyClassName)} style={props.bodyStyle}>
                {props.children}
            </div> 
        </div>
    )
})