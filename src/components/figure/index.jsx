import { memo, useState } from 'react'
import Configure from '@/components/icons/configure'
import Modal from '@/components/modal'
import Media from '@/components/icons/media'
import { useMemoizedFn } from '@/common/hooks'
import './index.css' 



export default memo((props)=>{
    const [open, setOpen] = useState(false)
 
    const onOpen = useMemoizedFn((info)=>{ setOpen(!!info) });
 
    return (
        <figure>
            <span><img src={[props?.img, props.src]} /></span>
            <figcaption style={{ fontSize: 16, padding: '0 6px'}}>
                <Media picture />
                <span className='name'>image</span>
                <span className='info'>
                    {[props?.title, props.children]}
                </span>
                <Configure 
                    onClick={onOpen.bind(null,true)}
                    expand fontSize="18px" strokeWidth="3" style={{ cursor: 'pointer' }}
                />
            </figcaption>

            <Modal open={open} onClose={onOpen.bind(null, false)} />
        </figure>
    )
})