
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
                path: "/rss",   
                component: '@/pages/blog/index.tsx',  
            }, 
            {
                path: "/rss/:id",   
                component: '@/pages/blog/index.tsx',  
            },
           
            {
                path: "/component",
                component: '@/pages/component/index.tsx',  
            },
            {
                path: "/theme",
                component: '@/pages/theme/index.tsx', 
            },
            {
                path: "/plugins",    
                component: null,
                children:[
                    {
                        index: true, 
                        component: '@/pages/plugins/index.tsx',
                    },
                    { 
                        path: "/plugins/video",   
                        component: '@/pages/plugins/video/index.tsx',  
                    },
                    {
                        path: "/plugins/calendar",
                        component: '@/pages/plugins/calendar/index.tsx', 
                    },
                    {
                        path: "/plugins/wallpaper",
                        component: '@/pages/plugins/wallpaper/index.tsx', 
                    },
                    {
                        path: "/plugins/wallpaper/:id",   
                        component: '@/pages/plugins/wallpaper/index.tsx',  
                    },
                    {
                        path: "/plugins/bmi",   
                        component: '@/pages/plugins/bmi/index.tsx',  
                    },
                    {
                        path: "/plugins/watermark",   
                        component: '@/pages/plugins/watermark/index.tsx',  
                    },
                ]
            },  
            {
                path: "/summary",
                component: '@/pages/summary/index.tsx', 
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