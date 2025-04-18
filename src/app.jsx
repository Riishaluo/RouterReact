import React from "react";
import Home from "./component/home"
import About from "./component/about";
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <div>   
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
