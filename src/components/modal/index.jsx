import { memo, useLayoutEffect, useMemo, useRef, useState } from "react";
import Button from "@/components/button";
import { Symbol } from '@/components/icons'
import ActivePortal from '@/components/portal' 
import { classes, offset } from "@/common/common";
import { useClick } from "@/common/hooks";
import './index.css'

export default memo((props)=>{
    const [active, setActive] = useState(false);
    const points = useRef({})
    const dialog = useRef(null)
    const point = useClick(true);
  
    useLayoutEffect(()=>{
        if(!props.open && active){
            setTimeout(()=>{
                points.current.transform = null
                setActive(false)
            }, 250)
        }
        if(props.open && !active){
            const element = offset(dialog.current);
            points.current.transform = point ? `${point?.x - (element.left / 1.4 )}px ${point?.y - (element.top / 3 )}px` : '50% 50%'
            setActive(true)
        } 
    },[props.open, active])
  
    return (
        <ActivePortal>
            <div className="modal-root">
                {
                    props.open &&  <div className="modal-mask" />
                }
                <div className="modal-wrap"  style={{ display: (props.open || active) ? undefined:  'none'}} onClick={props.onClose}>
                    <div role="dialog" ref={dialog} className={classes("dialog", props.open ? 'fade-appear' : 'fade-leave' )} style={{ transformOrigin: points?.current?.transform  }}>
                        <div className="modal-content" onClick={e=>e?.stopPropagation()}>
                            <Button className="modal-close" onClick={props.onClose}> <Symbol close /> </Button>

                            <div className="modal-header">
                                <div className="modal-title">Image title</div>
                            </div>

                            <div className="modal-body">
                                <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{width:'100%'}} />
                            </div>
                            <div className="modal-footer"></div>
                        </div>
                    </div> 
                </div>
            </div> 
        </ActivePortal> 
    )
})