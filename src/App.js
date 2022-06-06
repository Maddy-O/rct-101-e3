import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import Home from "./pages/Home";
import Product from "./components/Products/Product/Product";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products" element={<Products />}>
          <Route path="/:id" element={<Product />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
