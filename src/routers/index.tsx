



import React, { Suspense, useEffect } from 'react'
// * 导入所有router
import { Navigate, useRoutes, createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { RouteItem } from "@/interface/interface"
import Spining from '@/components/spining' 
import Routes from './router.config' 
// import Summary from '@/pages/summary/index'
// import Home from '@/pages/home/index'
// import Layout from '@/layout/index';
// import NotFound from '@/pages/404.jsx'

const modules:Record<string, () => Promise<any>> = import.meta.glob(['@/layout/*.tsx', '@/pages/*/index.tsx', '@/pages/*/*.tsx', '@/pages/*/**/index.tsx', '@/pages/404.jsx'])

  
function LazyLoad(Component: React.LazyExoticComponent<any>): React.ReactNode {
    return (
        <Suspense fallback={<Spining />}> 
            <Component />
        </Suspense>
    )
}


function Loader(routers: RouteItem[]): RouteObject[] {
    return routers?.map((item: any )=> {
        const path = item?.component?.replace('@', '/src'); 
        // const component = path ? modules[path] :null
        console.log({ modules, item, path });

        return {
            path: item.path,
            index: item.index, 
            element: path ? LazyLoad(React.lazy(modules[path])): null,
            origin: item.component,
            children: Array.isArray(item?.children) ? Loader(item?.children) : undefined
        }
    })
}
 
// console.log({ Routes }) 
const router = createBrowserRouter( 
    // routers
    Loader(Routes) 
);

// const onRouters = (routers:RouteItem[]) => { 
//     return routers?.map((item: RouteItem)=>{
//         return  {
//             // ...item,
//             path: item?.path,
//             element: item?.element 
//             //  <Element />
//         }
//     }) 
// }
// const item = onRouters(rootRouter)

export default () => {
    // console.log({ router }); 
    // console.log({ Routes });
    //

    useEffect(()=>{
        let root = document.getElementById('root')
        root?.classList.add('theme-root__init');
        const colors = ['--bg-0', '--bg-30', '--bg-60', '--bg-100']
  
        if (window.CSS) {
            colors?.forEach(color=>{
                (window?.CSS as any)?.registerProperty({
                    name: color,
                    syntax: '<color>',
                    inherits: false,
                    initialValue: 'transparent'
                });
            }) 
        }
    },[])

    return <RouterProvider router={router} />
    // return <RouterProvider router={router} />
}