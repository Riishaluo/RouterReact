import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <li><Link to="/about"> About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
        </div>
    );
}

export default Home;


