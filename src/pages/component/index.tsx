


import { useEffect, useState, CSSProperties, memo, useMemo } from 'react' 

import Timing from '@/components/timing' 
import Stretch from '@/components/stretch' 
import Spining from '@/components/spining' 
import Figure from '@/components/figure'
import Switch from '@/components/switch' 
import Button from '@/components/button'
import Groups from '@/components/group'
import Segment from '@/components/segment'
import Tooltip from '@/components/tooltip'
import Pagination from '@/components/pagination'
import Input from '@/components/input'
import Select from '@/components/select'
import Modal from '@/components/modal'
import Card from "@/components/card";
import { Direction, Media, Configure, Official, Symbol, Loading, Weather,Search, Screen} from '@/components/icons' 
import { useMemoizedFn, useFullScreen, useCreation, usePagination, useUpdate } from '@/common/hooks' 
import { useFetch, apis } from '@/request/index'

interface CustomCSS extends CSSProperties {
    '--status-color'?: string;
}

interface CustomState {
    loading?: boolean|number;
    name?: string;
    mode?: string|number|undefined;
    date?: string; 
    days?: string|number|null;
    inputType?:string|number|null;
}

export default memo((props)=>{
    const [http] = useFetch() 
    const [isFull, onToggle] = useFullScreen()
    const [state, setState, { navigate }] = useUpdate({ loading: true })
    const pagination = usePagination({ total: 20, init: 1 })
    

    useEffect(()=>{ 
        const holiday = String(apis.holiday).replace('$var', '2023');

        http?.get(holiday).then((res: any)=>{
            const now = new Date().valueOf(); 
            const data = res.data
            const arrs = data?.days?.map((i: any)=> {
                const tamp = new Date(i?.date).valueOf();
                return {...i, diff: Math.abs(now - tamp)}
            }).sort((a:any, b:any)=>a.diff - b.diff)

            const days = arrs?.slice(0, 2)?.map((i:CustomState, index:number)=>[!!index && <span key={index} />, i?.name, i?.date])
            state.days = days
            return setState({ ...state,  days: days })
        });

        setTimeout(()=>{
            setState({ ...state,  loading: false })
        }, 3000)
    },[])

    const onChange = useMemoizedFn(()=>{
        console.log({ state })  
        // return state.a
    })

    const getNowData = () => {
        return Math.random()
    }

    const nowData = useCreation(() => getNowData(), []);
 
    const onModeChange =()=>{
 
        pagination.next()
        // 点击切换模式
        if(!!state.mode){
            document.body.classList.remove("dark-mode")
        } else{
            document.body.classList.add("dark-mode");
        } 
        state.mode = !!state.mode ? 0 : 1
    }

 
    const onGotoSummary = ()=>{ 
        navigate('/summary')
        console.log({ props, navigate })
    }

    console.log('First:::', state )
  
    return (
        <div className='main'> 
            <Card title="自定义组件" bodyStyle={{ overflow:'hidden', overflowY:'auto' }}>
                <Spining loading={state?.loading }>   
                    <div style={{ display:'flex', flexDirection:'column', paddingBottom: 24 }}> 
                        
                        <div> 
                            <h4>Timing 组件</h4>
                            <div>
                                <span className='badge-status' style={{ '--status-color': 'rgba(73, 227, 221, 1)'} as CustomCSS} />
                                <span> 当前日期 ： </span>
                                <Timing date />
                            </div> 

                            <div>
                                <span className='badge-status' style={{ '--status-color': '#1677ff'} as CustomCSS} />
                                <span> 当前时间 ： </span> 
                                <Timing time /> 
                            </div> 
                        </div>
                        

                        <div>
                            <h4> useCreation Hook</h4>
                            <div>正常的函数： {getNowData()}</div>
                            <div>useCreation包裹后的： {nowData}</div>
                            <Button style={{fontSize:12}} type="primary" onClick={()=>setState({})}>更新State</Button> 
                        </div>
                
                     



                        <div>
                            <h4> Switch </h4>
                            <Switch />
                        </div>

                        <div>
                            <h4>Segment</h4>
                            <Segment 
                                fontSize="0.5rem"
                                options={[ 
                                    {label: 'apple', value: 'apple'},
                                    {label: 'funct', value: 'funct', disabled: true },
                                    {label: 'badge', value: 'badge'},
                                    {label: 'statu', value: 'statu'},
                                    {label: 'align', value: 'align'},
                                ]} 
                            /> 
                        </div>


                        <div>
                            <h4>Tooltip</h4>
                            <Groups> 
                                <Tooltip label={<div> Hello <br /> Hover </div>}>
                                    <Button>Hover Me</Button>
                                </Tooltip> 
                            </Groups> 
                        </div>

                        <div>
                            <h4>Modal</h4>

                            <Modal open={state.modalOpen} onClose={()=>setState({ modalOpen: false })} />

                            <Groups> 
                                <Button onClick={()=>setState({ modalOpen: true })}>Click Me</Button>
                            </Groups> 
                        </div>

                        <div>
                            <h4>Pagination</h4>
                            <Groups> 
                                <Pagination total={12} />
                            </Groups> 
                        </div>

                        <div>
                            <h4>Button</h4>
                            <Groups style={{ marginBottom: 24 }}>
                                {/* <Button onClick={onGotoSummary}> Go to Summary</Button> */}
                                <Button type="text"> AAAA</Button>
                                <Button type="primary"> BBBB</Button>
                                <Button type="danger"> CCCC</Button> 

                                <Button type="primary" outline> BBBB</Button>
                                <Button type="danger" outline> CCCC</Button>
                            </Groups> 
                        </div>

                        <div>
                            <h4>Input</h4>
                            <Groups style={{ marginBottom: 24 }}>
                                <Input
                                    placeholder="2323" 
                                    before={<Segment fontSize="0.1rem" options={[ 'apple', 'funct' ]} />}

                                    after={
                                        <Button type="text" compact>
                                            Search
                                        </Button>
                                    }
                                    value={state?.input || ''}
                                    onChange={(e: any)=>setState({ input: e?.target?.value })}
                                />   
                            </Groups>
                        </div>

                        <div>
                            <h4>Select</h4>
                            <Groups style={{ marginBottom: 24 }}>
                                <Select 
                                    clearable
                                    option={[
                                        {label: 'list1', value: 'list1'},
                                        {label: 'list2', value: 'list2', disabled: 1},
                                        {label: 'list3', value: 'list3'},
                                        {label: 'list4', value: 'list4', disabled: 1},
                                        {label: 'list5', value: 'list5'},
                                        {label: 'list6', value: 'list6'},
                                        {label: 'list7', value: 'list7'},
                                    ]}
                                />
                            </Groups> 
                        </div>

                        <div>
                            <h4>Figure</h4>
                            <Groups style={{ marginBottom: 24 }}>
                                <Figure 
                                    title="774×1186 131 KB" 
                                    img="https://t8.baidu.com/it/u=3297273922,3348521994&fm=218&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=BA81A14C8BA0BD4308F5D10B0000E0C1&sec=1681491600&t=0a363ddbfcfc830e10038a0ed04be108" 
                                />
                            </Groups>  
                        </div>

                        <div>
                            <h4>SVG 图标</h4>
                            <Groups> 
                                <Loading className='spinner-icon' type="1" /> 
                                <Loading type="3" className='spinner-zoom' />
                                <Loading type="2" className='spinner-icon2' fontSize="22px"  />  
                            </Groups>
                            <Groups> 
                                <Search search />
                                <Search find />
                                <Search history />
                                <Search zoomIn />
                                <Search zoomOut />
                            </Groups>

                            <Groups> 
                                <Symbol close /> 
                                <Symbol close-o />
                                <Symbol check  />
                                <Symbol minus  />
                                <Symbol plus  />  
                                <Symbol exclamation  />  
                            
                                <Symbol more  />  
                            </Groups>

                            <Groups> 
                                <Configure system  />  
                                <Configure setting  />  
                                <Configure like  /> 
                                <Configure tips  /> 
                                <Configure copy  /> 
                                <Configure delete  /> 
                                <Configure power  /> 
                                <Configure application  /> 

                                <Configure lock  /> 
                                <Configure unlock  /> 
                                <Configure expand  /> 
                                <Configure scanning  /> 
                                <Configure wifi  /> 
                            </Groups>

                            <Groups> 
                                <Official email /> 
                                <Official schedule />   
                                <Official word /> 
                                <Official text />
                                <Official log />
                                <Official notes />   
                                <Official label />   
                            </Groups>

                            <Groups> 
                                <Weather sun />
                                <Weather moon />
                                <Weather plan />
                                <div onClick={onModeChange}></div>   
                            </Groups>

                            <Groups> 
                                <Groups onClick={onToggle}>
                                    {
                                        isFull ? (
                                            <Screen screen-off />  
                                        ): (
                                            <Screen screen-full />  
                                        )
                                    }
                                </Groups>

                                <Screen screenshot />
                                <Screen focus />
                            </Groups>

                            <Groups> 
                                <Media picture />  
                                <Media album />  
                                <Media voice-message />  
                                <Media broadcast />  
                                <Media camera />  
                                <Media pause />  
                                <Media play />  
                                <Media replay />  
                                <Media voice />  
                                <Media voice-off />  
                                <Media volumn />  
                                <Media volumn-down />  
                                <Media volumn-up />  
                                <Media volumn-mute />  
                                <Media video />
                            </Groups> 
                            <Groups>  
                                <Direction ring  />  

                                <Direction caret-up  />  
                                <Direction caret-down  />  
                                <Direction caret-left  />  
                                <Direction caret-right  />  

                                <Direction arraw-left  />  
                                <Direction arraw-right  />  
                                <Direction arraw-down  />  
                                <Direction arraw-up  />  

                                <Direction left  />  
                                <Direction right  />  

                                <Direction up  />  
                                <Direction down  />  
                            </Groups> 
                        </div> 
                    </div>
                </Spining> 
            </Card>  

        </div> 
    )
})