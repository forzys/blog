



import { useEffect, useState, CSSProperties,memo, useMemo } from 'react' 
import { Outlet } from "react-router-dom";
import Segment from '@/components/segment'
import { useUid, useActive, useObserver, useUpdate, useMemoizedFn } from '@/common/hooks' 
import styles from './index.module.css';
// import github from '../assets/github.svg';


type SegmentType = {
    label?: string | number
    value?: string | number
}
 

export default memo((props: any)=>{
    const [state, setState, { navigate }] = useUpdate({ loading: true })
 
    const onSegmentChange = useMemoizedFn((_:any, item: SegmentType)=>{
        // 页面跳转
        navigate('/' + item.value)
    });
   
    const init = useMemo(()=>location?.pathname?.replace('/', ''),[])

    return (
        <>
   
         <header className={styles.header}> 
            <Segment 
                fontSize="0.8rem"
                init={init}
                options={[
                    {label: 'Blog',     value: 'blog'},
                    {label: 'Video',     value: 'video'},
                    {label: 'Component',value: 'component'},
                    {label: 'Calendar',  value: 'calendar'},
                    {label: 'Theme',  value:'theme'},
                ]}
                onChange={onSegmentChange}
            />
        </header> 
        
        <main className={styles.main}>
          <Outlet />
        </main>
       
        <footer className={styles.footer}>
            <div className={styles.item}>
                <a href="https://beian.miit.gov.cn/">豫ICP备2023012795号</a>
            </div>
            <div className={styles.item} style={{gap: 12}}>
              <a>Copyright@2023</a>
              <a className={styles.github} target='_blank' href="https://github.com/forzys/blog" />  
            </div>
            <div className={styles.item} />
        </footer>
 
        </>
       
    )
})