import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import Home from "./pages/Home";
import Product from "./components/Products/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        >
          <Route
            path=":id"
            element={
              <RequiredAuth>
                <Product />
              </RequiredAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
