import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

function MainRouter() {
    const [name, setName] = useState("Rishal");

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About user={name} />}/>
        </Routes>
    );
}

export default MainRouter
