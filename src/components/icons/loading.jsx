
import { memo } from 'react' 
import { useFindIcon  } from '@/common/hooks' 

export default memo((props)=>{
    const onFindIcon = useFindIcon({ [props?.type || '1'] : true, ...props })
  
    return onFindIcon({
        '1': [<circle cx="24" cy="24" r="21" />],
        '2': [<circle cx="24" cy="24" r="22" strokeDasharray="2, 15.28" />],
        '3':[
            <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" />,
            <path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" />
        ],

      

    })
})