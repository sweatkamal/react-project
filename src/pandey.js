import React , {useState} from "react"
import "./sweat.css"

const Pandey = () => {
    const  [marks, setmarks] = useState(1)
    return(
        <div>
            <p>my marks were {marks} </p>
            <button onClick={()=>{
            setmarks (marks+1)
            }}>UPDATE BUTTON</button>
        </div>
    )
}
export default Pandey