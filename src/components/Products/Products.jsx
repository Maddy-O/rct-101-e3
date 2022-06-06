import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="productsCard">
      {data.map((e) => (
        <Product key={e.id} id={e.id} />
      ))}
    </div>
  );
};

export default Products;
