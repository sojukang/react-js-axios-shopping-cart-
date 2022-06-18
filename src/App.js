import React from "react";
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products List</Link>
                </li>
            </ul>
            <hr/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products/*" element={<Products/>}/>
            </Routes>
        </div>
    );
}

export default App;
