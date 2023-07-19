import {memo, useEffect, useMemo, useState} from "react";
import Input from "@/components/input";
import styles from './index.module.css'
import Button from "@/components/button";
import Segment from "@/components/segment";
import { useFetch, apis } from "@/request"; 



export default memo(()=>{
    const [bmi, setBmi] = useState(0)
    const [active, setActive] = useState('')
    const [level, setLevel] = useState([])
    const [http] = useFetch();


    useEffect(()=>{ 
        http.get(apis.bmi).then((res)=>{
            setLevel(res.data)
            const [first] = res.data 
            setActive(first.name)
        });
    },[])


    const options:any = useMemo(()=>level?.map((item:any)=>item?.name), [level])

    const bmiInfo:any = useMemo(()=>level.find((item:any)=>item?.name === active),[level, active])


    const onBMISubmit = (e:any)=>{
        if(e?.target?.localName === 'form' && e?.type === "submit"){
            e.preventDefault(); 
            const elements = e?.target?.elements
            const weight = elements.weight?.value
            const height = elements.height?.value;
            const bmi = weight / (height ** 2 / 100 ** 2); 
            bmi && setBmi(Math.round(bmi * 10) / 10) 
        } 
 
      
        return 
     
    }

    return (
        <div className="main">
            <header>
                <h3>身体质量指数 (BMI)</h3>
                <p>身体质量指数 (Body Mass Index, 简称BMI), 亦称克托莱指数, 是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。BMI 值超标，意味着你必须减肥了。</p>
                
            </header>
            
            <article className={styles.inputBox}>
                <form onSubmit={onBMISubmit}>
                    <div className={styles.fields}>
                        <span>我的身高:</span>
                        <Input name="height" style={{fontSize: 16, fontWeight: 500}} />
                        <span>单位: 厘米 cm</span>
                    </div>

                    <div className={styles.fields}>
                        <span>我的体重:</span>
                        <Input name="weight" style={{fontSize: 16, fontWeight: 500}} />
                        <span>单位: 千克 kg</span>
                    </div>

                    <div className={styles.fields}>
                        <span>BMI 标准:</span>
                        <Segment options={options} onChange={(e:any)=>setActive(e)} />
                    </div>


                    <div className={styles.fields}>
                        <span style={{visibility:'hidden',opacity:0}}>计算 BMI:</span>
                        <Button type="submit" style={{ background:'var(--btn-primary-color)', padding: '0 24px', color:'#fff' }} onClick={onBMISubmit}>计算 BMI</Button>
                    </div> 
                </form> 
                <div>
                    {
                        bmiInfo?.list?.map((item:any, index:number)=>{
                            const x2 = ['中国', '日本'].some(i=> active?.includes(i))
                            return (
                                <div key={item?.type+item.bmi} className={styles.bmiBox} style={{'--color-bmi':`var(--bmi-${index * (x2 ? 2 : 1)})`} as any}>
                                    <span> {item?.type}</span>
                                    <span> {item?.bmi}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </article>

            <aside className={styles.inputBox}>
                {bmi ? `当前计算BMI：${bmi}`: undefined}
            </aside>

            {/* <footer>
                
                <header>我的 BMI 历史记录</header>
                <div> 
                    Charts
                </div>
                <div>
                    Table
                </div> 
            </footer>  */}
        </div>
    )
})