import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <h3>{e.name}</h3>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
