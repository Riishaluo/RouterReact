import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




function Home (){
    const [name,setName] = useState("")
    const [des,setDes]  = useState("")
    const [color,setColor] = useState("")
    const [detail,setDetails] = useState({
        name : "",
        des : "",
        color : ""
    })
    const navigate=useNavigate()


    const addTask = (name,des,color)=>{
        setDetails(
            {
                name:name,
                des:des,
                color:color
            }
        )
    }

    console.log(detail)

    return(
        <div>
        
           Enter your Name <input onChange={(e)=>setName(e.target.value)}   type="text" />
            <br/>
           Enter The description <input onChange={(e)=>setDes(e.target.value)} type="text" />
            <br/>
           Enter a colour name <input onChange={(e)=>setColor(e.target.value)}  type="text" />

            <button onClick={()=>addTask(name,des,color)} >Add Task</button>
            <button onClick={()=>navigate('/about',{state:{detail}})}>View Page</button>

        

        </div>
    )
}

export default Home