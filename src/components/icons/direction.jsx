
 

import { memo } from 'react'
import { useFindIcon } from '@/common/hooks' 

export default memo((props)=>{
    const onFindIcon = useFindIcon(props)
    return onFindIcon({
        ring:[
            <circle cx="24" cy="24" r="22"  
                style={{
                    strokeDasharray:'38px, 8',
                    strokeDashoffset: 180,
                }} 
            />,
        ],



        'caret-up':[ <path d="M12 29L24 17L36 29H12Z" /> ],
        'caret-down':[ <path d="M36 19L24 31L12 19H36Z" /> ],
        'caret-left':[ <path d="M30 36L18 24L30 12V36Z" /> ],
        'caret-right':[ <path d="M20 12L32 24L20 36V12Z" />],
  
        'arraw-left':[
            <path d="M12 23.9917H36" />,
            <path d="M24 36L12 24L24 12" />
        ],
        
        'arraw-right':[
            <path d="M36 24.0083H12" />,
            <path d="M24 12L36 24L24 36" />
        ], 

        'arraw-down':[
            <path d="M24.0083 35.8995V12"  />,
            <path d="M36 24L24 36L12 24" /> 
        ], 
        'arraw-up':[
            <path d="M24.0083 12.1006V36.0001"  />,
            <path d="M12 24L24 12L36 24" /> 
        ], 

        'left':[
            <path d="M31 36L19 24L31 12" />
        ],
        'right':[ 
            <path d="M19 12L31 24L19 36" />
        ], 
        'down':[
            <path d="M36 18L24 30L12 18" />
        ],
        'up':[
            <path d="M13 30L25 18L37 30"/>
        ], 
    })
})