import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id }) => {
  // Note: this id should come from api
  const [data, setData] = useState([]);
  const { IncreaseCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    let sum = value + count;
    if (sum >= 0) {
      setCount(value + count);
      IncreaseCart(value);
    }
  };

  useEffect(() => {
    axios({
      url: `http://localhost:8080/products/${id}`,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`} className="productCard">
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button
          data-cy="product-increment-cart-item-count-button"
          onClick={() => {
            handleCount(1);
          }}
        >
          +
        </button>
        <span data-cy="product-count">{count}</span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          onClick={() => {
            handleCount(-1);
          }}
        >
          -
        </button>
        <button data-cy="product-remove-cart-item-button">
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;
