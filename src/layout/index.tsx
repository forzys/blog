import { useEffect, useState, CSSProperties,memo, useMemo } from 'react' 
import { Outlet } from "react-router-dom";
import Segment from '@/components/segment'
import { useUid, useActive, useObserver, useUpdate, useMemoizedFn } from '@/common/hooks' 
import Timing from '@/components/timing' 
import styles from './index.module.css';
// import github from '../assets/github.svg';
import Button from '@/components/button'
import { Configure } from '@/components/icons' 

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
   
    const init = useMemo(()=>location?.pathname?.replace('/', ''),[location?.pathname])
 
    const onChange = (item: SegmentType)=>{ 
        navigate('/' + item.key) 
    }

    const onShowMenu = (flag: boolean)=>{

        return()=>{
            setState({ show: flag })
        }
       
    }

    return (
        <> 
            <div className={styles.navbar} style={{ left: state?.show ? 0 : -200 }}>
                <div className={styles.inner}> 
                    <ul style={{display:'flex', flexDirection:'column', gap: 12 }}>
                        <li>
                            <a className={styles.item} key='视频提取音频' target='_black' href="/video2audio/index.html">
                                视频提取音频
                            </a>
                        </li>
                        <li>
                            <a className={styles.item} key='M3U8视频提取' target='_black' href="/m3u8-downloader/index.html">
                                M3U8视频提取
                            </a>
                        </li>
                        <li>
                            <a className={styles.item} key='Iconfont在线预览' target='_black' href="/preview.html">
                                Iconfont在线预览
                            </a>
                        </li>
                        <li>
                            <a className={styles.item} key='img' target="_blank" href="https://image.19941024.xyz/">
                                for-Image图床
                            </a> 
                        </li>
                        <li>
                            <a className={styles.item} key='img' target="_blank" href="https://short.19941024.xyz/">
                                短网址
                            </a> 
                        </li>
                    </ul> 
                </div>
            </div>
            <div
                style={{
                    position:'relative',
                    transition: 'left .3s ease-in-out',
                    left: state.show ? 200 :  0, 
                    transform: state.show ?  'translate3d(0px, 0px, 10px)': 'none'
                }}
            > 
                <header className={styles.header}> 
                    <div className={styles.outer}> 
                        <div className={styles.innerMenu}>

                            <Button className={styles.item} onClick={onShowMenu(!state.show)}>
                                <Configure application fontSize="24px" />
                            </Button> 

                            <div className={styles.item} style={{  padding: 4 }} onClick={onChange.bind(null,{  title: 'Blog', key: 'blog' })}>
                                UFOO
                            </div>
                        </div>

                        <div className={styles.inner}> 
                            <div className={styles.item} style={{ width: 64, height: 64, padding: 8 }} onClick={onChange.bind(null,{  title: 'Blog', key: 'blog' })}>
                                <img src="/favicon128.png" style={{ width: '100%', height:'100%', overflow:'hidden' }} />
                            </div>

                  
                            <a className={styles.item} key='视频提取音频' target='_black' href="/video2audio/index.html">
                                视频提取音频
                            </a>
                      
                            <a className={styles.item} key='M3U8视频提取' href="/m3u8-downloader/index.html">
                                M3U8视频提取
                            </a>

                            <a className={styles.item} key='Iconfont在线预览' href="/preview.html">
                                Iconfont在线预览
                            </a>

                            <a className={styles.item} key='img' target="_blank" href="https://image.19941024.xyz/">
                                for-Image图床
                            </a>

                            <a className={styles.item} key='img' target="_blank" href="https://short.19941024.xyz/">
                                短网址
                            </a> 
                        </div>
        
                    
                        <Button className={styles.more} onClick={onChange.bind(null,{ key: 'plugins' })}>
                            <Configure system fontSize="24px" />
                        </Button> 
                    </div> 
                </header> 
                
                <main className={styles.main}> 
                    <Outlet />
        
                    {
                        init !== 'plugins' && (
                            <Button className={styles.more} onClick={onChange.bind(null,{ key: 'plugins' })}>
                                <Configure system fontSize="24px" />
                            </Button>
                        )
                    } 
                </main>
            
                <footer className={styles.footer}> 
                    <span className={styles.item}>
                        <a className="github" target='_blank' href="https://github.com/forzys/blog" />
                        <span className={styles.item} style={{flexDirection:'column', gap:0}}>
                            <a target='_black' href="https://beian.miit.gov.cn/">豫ICP备2023012795号</a>  
                            <a>Copyright©2023 Forzys </a>
                        </span> 
                    </span>
                    <span>
                        <img style={{width: 120, height: 48, marginBottom: 0}} src="https://api.19941024.xyz/counter?type=img&img=true&VisitorText=訪問人數&HitText=訪問次數" alt=":name" /> 
                    </span>
                </footer>

                <div className={styles.mask} style={{display:state.show ? 'block': 'none'}}  onClick={onShowMenu(false)} ></div>
            </div>
        </>
       
    )
})