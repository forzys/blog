import { memo } from 'react'
import Loading from "@/components/icons/loading"
import './index.css'

export default memo((props)=>{ 

    return (
        <div style={{ position: 'relative', ...props.style }}>
            {
                !!props?.loading && ( 
                    <div className="spinner">
                        {/* <div className="spining">
                            <div className="spinner_icon"> <Loading className='spinner-icon' /> </div>
                            <div className="spinner_text"> {'loading...'} </div>
                        </div> */}

                        <div className="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )
            }
            <div key="container" className={`spinner-container ${props.loading ? 'spinner-blur': ''}`}>
                {props.children}
            </div> 
        </div>
    )
})