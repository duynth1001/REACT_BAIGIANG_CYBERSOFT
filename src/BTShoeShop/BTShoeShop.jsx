// rafc
import React, { useState } from "react";
import data from "./data.json";
import { ProductList } from "./ProductList";
import { ProductDetailModal } from "./ProductDetailModal";
import { CartModal } from "./CartModal";

export const BTShoeShop = () => {
  // console.log('data: ', data)
  const [productDetail, setProductDetail] = useState({
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  });

  const handleProductDetail = (product) => {
    setProductDetail(product);
  };
  const [carts, setCarts] = useState([]);

  const handleCarts = (product) => {
    // setCarts([...carts, { ...product, cartQuantity: 1 }])
    setCarts((prevState) => {
      // Kiểm tra xem trong carts đã có sản phẩm đang muốn thêm hay chưa
      const index = prevState.findIndex((value) => value.id === product.id);

      // Chưa tồn tại trong carts
      if (index === -1) {
        prevState.push({ ...product, cartQuantity: 1 });
      } else {
        prevState[index].cartQuantity += 1;
      }

      return [...prevState];
    });
  };
  // quantity : 1 || -1
  // 1 : btn +
  // -1 : btn -1
  const handleCartQuantity = (productId, quantity) => {
    setCarts((prevState) => {
      const index = prevState.findIndex((value) => value.id === productId);
      prevState[index].cartQuantity =
        prevState[index].cartQuantity + quantity || 1;
      return [...prevState];
    });
  };
  const deleteCart = (productId) => {
    setCarts((prevState) => {
      return prevState.filter((value) => value.id !== productId);
    });
  };
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <h1>BTShoeShop</h1>
        <p
          className="fs-3"
          style={{
            cursor: "pointer",
          }}
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          <i className="fa-solid fa-cart-plus me-2"></i>
          Giỏ hàng
        </p>
      </div>
      <ProductList
        data={data}
        handleProductDetail={handleProductDetail}
        handleCarts={handleCarts}
      />
      <ProductDetailModal productDetail={productDetail} />
      <CartModal
        carts={carts}
        handleCartQuantity={handleCartQuantity}
        deleteCart={deleteCart}
      />
    </div>
  );
};
