import React from "react";
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

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
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/:productId" element={<Product />} />
            </Routes>
        </div>
    );
}

export default App;
