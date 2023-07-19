


import { memo } from 'react';
import { useUpdate } from "@/hooks/useUpdate";
import Button from "@/components/button";
import Groups from "@/components/group";

export default memo((props)=>{
    const [state, setState, { navigate, params, location }] = useUpdate({ loading: true })

    function onChange(item: any){
        navigate('/plugins/' + item.key)
    }

   
    return (
        <div className='main'>  

            <Groups style={{ marginBottom: 24 }}>
                {
                    [
                        { title: 'Calendar', key: 'calendar' },  
                        { title: 'Video', key: 'video' },  
                        { title: 'Wallpaper', key: 'wallpaper' },  
                        { title: 'BMI', key: 'bmi' },  
                    ].map((item) => {
                        return  <Button type="primary" onClick={onChange.bind(null,item)}>{item.title}</Button> 
                         
                    })
                }
            </Groups>
          
        </div>
    )
})