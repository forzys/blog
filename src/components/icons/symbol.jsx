
import { memo } from 'react' 
import { useFindIcon  } from '@/common/hooks' 

export default memo((props)=>{

    const onFindIcon = useFindIcon(props)
 
    return onFindIcon({ 
            close:[
                <path d="M14 14L34 34"  />,
                <path d="M14 34L34 14" /> 
            ],

            'close-o':[
                <circle cx="24" cy="24" r="22" />,
                <path d="M29.6567 18.3432L18.343 29.6569" />,
                <path d="M18.3433 18.3432L29.657 29.6569" />
            ],
            check:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M16 24L22 30L34 18" />,
            ],
            minus:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M16 24L32 24" />,
            ],
            plus:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M24 16V32" />,
                <path d="M16 24L32 24"  />,
            ],
            exclamation:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M24 12V26" />,
                <circle r="2" transform="translate(24, 34)" fill="#fff"/>,
            ], 
            more: [
                <circle cx="12" cy="24" r="3" />,
                <circle cx="24" cy="24" r="3" />,
                <circle cx="36" cy="24" r="3" />,
            ],
        }   
    )
})