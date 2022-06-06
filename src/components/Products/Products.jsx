import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Product from "./Product/Product";
import { AuthContext } from "../../context/AuthContext";

const Products = () => {
  const [state] = useContext(AuthContext);
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

  if (state.isAuth) {
    return (
      <div className="productsCard">
        {data.map((e) => (
          <Product key={e.id} id={e.id} />
        ))}
      </div>
    );
  }

  return <div></div>;
};

export default Products;
