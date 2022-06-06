import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({ id }) => {
  // Note: this id should come from api
  const [data, setData] = useState([]);

  // const la = useParams();
  // console.log(la);

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
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
