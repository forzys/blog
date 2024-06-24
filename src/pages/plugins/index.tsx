


import { memo } from 'react';
import { useUpdate } from "@/hooks/useUpdate";
import Button from "@/components/button";
import Groups from "@/components/group";

export default memo((props)=>{
    const [state, setState, { navigate, params, location }] = useUpdate({ loading: true })

    function onChange(item: any){ 
        navigate((item.first ? '/' : '/plugins/') + item.key)
    }
   
    return (
        <div className='main'>
            <Groups style={{ marginBottom: 24, flexDirection: 'column', alignItems:'flex-start' }}>
                {
                    [
                        { title: '身体指数(BMI)', key: 'bmi' },  
                        { title: '放假安排', key: 'calendar' },  
                        { title: '视频解析', key: 'video' },  
                        { title: '必应壁纸', key: 'wallpaper' },
                        // { title: '水印', key: 'watermark' },  
                        { title: '背景主题', key: 'theme', first: true, },  
                    ].map((item) => {
                        return  <Button type="primary" onClick={onChange.bind(null,item)}>{item.title}</Button> 
                         
                    })
                }
            </Groups>
          
        </div>
    )
})