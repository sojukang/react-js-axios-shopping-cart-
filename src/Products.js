import {Link, Route, Routes} from "react-router-dom";
import Product from "./Product";


const Products = () => {
    return (
        <div>
            <h3>Products List</h3>
            <ul>
                <li>
                    <Link to={"/products/1"}>product 1</Link>
                </li>
                <li>
                    <Link to={"/products/2"}>product 2</Link>
                </li>
            </ul>
            <Routes>
                <Route
                    path="/"
                    element={"Select a Product"}
                />
                <Route path=":productId" element={<Product />} />
            </Routes>
        </div>
    )
}

export default Products;