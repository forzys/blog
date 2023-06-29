
import { memo } from 'react'
import { useFindIcon  } from '@/common/hooks' 
 
export default memo((props)=> {
    const onFindIcon = useFindIcon(props)
  
    return onFindIcon(
        {
            'screen-full':[
                <path d="M33 6H42V15" />,
                <path d="M42 33V42H33" />,
                <path d="M15 42H6V33" />,
                <path d="M6 15V6H15" />,
            ],
            'screen-off':[
                <path d="M33 6V15H42" />,
                <path d="M15 6V15H6" />,
                <path d="M15 42V33H6" />,
                <path d="M33 42V33H41.8995" />,
            ],
            screenshot:[
                <path d="M16 6H8C6.89543 6 6 6.89543 6 8V16" />,
                <path d="M16 42H8C6.89543 42 6 41.1046 6 40V32" />,
                <path d="M32 42H40C41.1046 42 42 41.1046 42 40V32" />,
                <path d="M32 6H40C41.1046 6 42 6.89543 42 8V16" />,
                <rect x="14" y="14" width="20" height="20" rx="2" />,
            ], 
            focus:[
                <path d="M33 6H42V15" />,
                <path d="M42 33V42H33" />,
                <path d="M15 42H6V33" />,
                <path d="M6 15V6H15" />,
                <rect x="14" y="14" width="20" height="20" rx="10" />,
                <circle r="3" transform="matrix(-1 0 0 1 24 24)" fill="#fff"/>,
            ],
        } 
    ) 
})




