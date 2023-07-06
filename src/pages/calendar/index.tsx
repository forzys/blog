 
import { memo,  useLayoutEffect } from "react";  
import {   useUpdate } from '@/common/hooks' 
import { useFetch, apis } from '@/request/index' 
// import Card from "@/components/card";
import styles from './index.module.css'



export default memo((props)=>{
    const [https] = useFetch()
    const [state, setState ] = useUpdate({ loading: true })

  
    useLayoutEffect(()=>{ 
        const holiday = String(apis.holiday).replace('$var', '2023');

        https?.get(holiday).then((res: any)=>{
            const data = res?.data
            const days = data?.days?.reduce((summ:any, item:any)=>{ 
                summ[item.name] = summ[item.name] || [];
                if(item.isOffDay){
                    summ[item.name].push(item.date)
                }
                return summ 
            },{});

            setState({ days, holiday: Object.keys(days || {}) }) 
        }); 

    },[])




    return (
        <div className="main" style={{background: 'rgba(0,0,0,0)'}}>  

           <div className={styles.holiday}>
                <header className={styles.holidayHeader} style={{ paddingBottom: 12 }}> 
                    <span style={{fontSize: 16}}>放假安排</span>
                    <div style={{ fontSize: 12}}>国务院公布的全年法定节假日安排</div> 
                </header>
                
                <div className={styles.holidayBody}>
                    {
                        state?.holiday?.map((name: string)=>{
                            const current = state?.days[name] 
                            const length = current?.length
                            const first = current[0]
                            const last =  current[length - 1]

                            return (
                                <p className={styles.holidayRow} key={first+last}>
                                    <span style={{flex: 1, fontWeight:600}}>{name}</span>
                                    <span style={{flex: 2 }}>{first} - {last}</span>
                                    <span style={{width: 48, textAlign:'center'}}>{length}</span>
                                </p>
                            )
                        })
                    }
                </div>
            
            </div> 
        </div>
    )
})