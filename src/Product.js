import React from "react";
import {useParams} from "react-router-dom";

const productData = {
    1: {
        name: "product1",
        price: 24500,
        quantity: 10
    },
    2: {
        name: "product2",
        price: 2450,
        quantity: 1
    }
};

const Product = () => {
    const {productId} = useParams();
    const product = productData[productId];
    if (!product) {
        return <div>존재하지 않는 상품입니다.</div>;
    }
    return (
        <div>
            <h3>
                productId: {productId}
            </h3>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
        </div>
    )
}

export default Product;