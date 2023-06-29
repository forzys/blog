
import { memo } from 'react' 
import { useFindIcon  } from '@/common/hooks' 

export default memo((props)=>{ 
    const onFindIcon = useFindIcon(props);
  
    return onFindIcon({
        sun:[
            <circle cx="24" cy="24" r="22" stroke="#fff" strokeWidth="3" strokeDasharray="2, 15.28"   />,
            <circle cx="24" cy="24" r="15" stroke="#fff" fill="#fff" strokeLinecap="round" />
        ],
        moon:[
            <path d="M16.8657 7.46924C16.3036 9.21181 16 11.0705 16 13C16 22.9411 24.0589 31 34 31C36.5346 31 38.9468 30.4762 41.1343 29.5308C38.8006 36.766 32.0116 42 24 42C14.0589 42 6 33.9411 6 24C6 16.5935 10.4734 10.2317 16.8657 7.46924Z" />,
        ],
        plan:[
            <rect x="4" y="4" width="40" height="40" rx="2" />,
            <path d="M4 14H44" stroke="#fff" />,
            <line x1="4" y1="11" x2="4" y2="23" />,
            <line x1="44" y1="11" x2="44" y2="23" />,
        ],
    })
})