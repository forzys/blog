import { memo, useCallback, useState } from "react";
import Loading from "@/components/icons/loading";
import { classes } from "@/common/common"; 
import './index.css'



export default memo((props)=>{
    const [checked, setChecked] = useState(props.init)
    
    const onChecked = useCallback((e) =>{
        e.stopPropagation();
        if(!props.disabled ){
            props.onChange?.(!checked);
            props.onSwitch?.(!checked);
            props.onChecked?.(!checked);
            setChecked(!checked);
        }
    },[checked, props.disabled]);


    return (
        <button
            role="switch" 
            onClick={onChecked} 
            data-disabled={props.disabled}
            className={classes('btn-switch', checked && 'switch-checked')}
        >
            <div className="switch-handle">
                <span className="action">
                    <Loading className="spinner-icon" type="1" fontSize="14px" color="#1677ff" />
                </span> 
            </div>
            <div className="switch-inner">
                <span className="inner-checked">1</span>
                <span className="inner-uncheck">0</span>
            </div>
        </button>
    )
})