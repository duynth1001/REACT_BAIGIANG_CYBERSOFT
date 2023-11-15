import React from 'react'
import  data  from "./data.json";
import { ProductList } from './ProductList';
import { ProductDetail } from './ProductDetail';
import { Cart } from './Cart';
export const BTPhone = () => {
  console.log(data);
    return (
        <div className="container mt-3">
        <div className="d-flex justify-content-between">
            <h1>BTPhone</h1>
            <p
                className="fs-3"
                style={{
                    cursor: 'pointer',
                }}
                data-bs-toggle="modal"
                data-bs-target="#phoneModal"
            >
                <i className="fa-solid fa-cart-plus me-2"></i>
                Giỏ hàng
            </p>
        </div>
        <ProductList data={data} />
        <ProductDetail />
        <Cart />
    </div>

  )
}

