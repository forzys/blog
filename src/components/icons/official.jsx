

import { memo } from 'react'
import { useFindIcon } from '@/common/hooks';

export default memo((props)=>{
    const onFindIcon = useFindIcon(props);
    return onFindIcon({
        email: [
            <path d="M4 39H44V24V9H24H4V24V39Z" />,
            <path d="M4 9L24 24L44 9" />,
            <path d="M24 9H4V24" />,
            <path d="M44 24V9H24" />,
        ],
        schedule:[
            <path d="M25 23L14 23" />,
            <path d="M34 31L14 31" />,
            <path d="M14 6V14" />,
            <path d="M34 6V14" />,
            <rect x="4" y="10" width="40" height="30" rx="2" />,
        ],

        word:[
            <rect x="6" y="6" width="36" height="36" rx="3" />,
            <path d="M14 16L18 32L24 19L30 32L34 16" />,
        ],
        text:[
            <rect x="6" y="6" width="36" height="36" rx="3" />,
            <path d="M16 19V16H32V19" stroke="#fff" />,
            <path d="M22 34H26" stroke="#fff" />,
            <path d="M24 18L24 34" stroke="#fff" />,
        ],
       
        log:[
            <rect x="13" y="10" width="28" height="34" />,
            <path d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13" />,
            <path d="M21 22H33" stroke="#fff" />,
            <path d="M21 30H33" stroke="#fff" />,
        ],
        notes:[
            <path d="M16 20H32" />,
            <path d="M16 28H32" />,
            <path d="M8 6C8 4.89543 8.89543 4 10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6Z" />
        ], 
        label:[
            <path d="M9 4H39V44L24 33.4286L9 44V4Z" />,
            <rect x="9" y="4" width="30" height="12" />
        ],      
    })
})