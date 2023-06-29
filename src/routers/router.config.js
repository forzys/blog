
const routers = [
    {
        path: "/", 
        component: '@/layout/index.tsx', 
        children:[
            { 
                index: true, 
                component: '@/pages/blog/index.tsx', 
            }, 
            {
                path: "/blog",   
                component: '@/pages/blog/index.tsx',  
            }, 
            {
                path: "/blog/:id",   
                component: '@/pages/blog/index.tsx',  
            },
            { 
                path: "/video",   
                component: '@/pages/video/index.tsx',  
            },
            {
                path: "/component",
                component: '@/pages/component/index.tsx',  
            },
            {
                path: "/calendar",
                component: '@/pages/calendar/index.tsx', 
            },
            {
                path: "/summary",
                component: '@/pages/summary/index.tsx', 
            },
            {
                path: "/theme",
                component: '@/pages/theme/index.tsx', 
            },
        ]
    },
    
    {
        path: "*", 
		component: '@/pages/404.jsx',
        // imm: import('@/pages/404.jsx'),
    },
]


export default routers