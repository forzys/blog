/**
 * about water
 */

import { useState } from "react"
import './index.css'
export default function Water(){ 
    const [rate, setRate] = useState(50) 

    const onChange = (e)=>{ 
        setRate(e.target.value)

    }

    return (
        <div>
            <div className="indicator" style={{ '--completion': rate + '%' }}>
                <output name="result" htmlFor="completion"></output>
            </div>

            <input id="completion" type="range" min={1} max={99} onChange={onChange} />
            
        </div>
    )
}