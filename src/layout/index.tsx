



import { useEffect, useState, CSSProperties,memo, useMemo } from 'react' 
import { Outlet } from "react-router-dom";
import Segment from '@/components/segment'
import { useUid, useActive, useObserver, useUpdate, useMemoizedFn } from '@/common/hooks' 
import Timing from '@/components/timing' 
import styles from './index.module.css';
// import github from '../assets/github.svg';


type SegmentType = {
    title?: string | number
    key?: string | number
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


    const onChange = (item: SegmentType)=>{ 
        navigate('/' + item.key) 
    }
 

    return (
        <> 
   
         <header className={styles.header}> 
            <div className={styles.outer}>
                <div className={styles.inner}>
                    {
                        [
                            { title: 'Blog', key: 'blog' }, 
                            { title: 'Component', key: 'component'  }, 
                            { title: 'Theme',  key: 'theme' }
                        ].map((item) => {
                            return (
                                <div className={styles.item} key={item.key} onClick={onChange.bind(null,item)}>
                                    {item.title}
                                </div>
                            )
                        })
                    } 
                </div>
                <div className={styles.inner}>
                    {
                         [
                            { title: 'Plugins', key: 'plugins' },  
                        ].map((item) => {
                            return (
                                <div className={styles.item} key={item.key} onClick={onChange.bind(null,item)}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                    <div>
                        <Timing time /> 
                    </div>
                </div>
            </div>
                 
        </header> 
        
        <main className={styles.main}>
          <Outlet />
        </main>
       
        <footer className={styles.footer}> 
            <span className={styles.item}>
                <a className={styles.github} target='_blank' href="https://github.com/forzys/blog" />
                <span className={styles.item} style={{flexDirection:'column', gap:0}}>
                    <a target='_black' href="https://beian.miit.gov.cn/">豫ICP备2023012795号</a>  
                    <a>Copyright©2023 Forzys </a>
                </span> 
            </span>
        </footer> 
        </>
       
    )
})