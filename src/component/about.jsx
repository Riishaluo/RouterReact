import React from "react";
import { useLocation } from "react-router-dom";


function About (){
    const location = useLocation()
   const  data=location.state.detail
console.log(data)
    return (
        <>
        <h1>
            Hai
        </h1>
        <h1>name{data.name}</h1>
        <h1>des{data.des}</h1>
        <h1>color{data.color}</h1>
        </>
        
    )
}


export default About