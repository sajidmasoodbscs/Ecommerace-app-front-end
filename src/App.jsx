import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Success from "./Pages/success"
import Cancel from "./Pages/cancel"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"
import ProductsList from "./Pages/ProductsList"






import { BrowserRouter, Routes, Route } from "react-router-dom"; 

const App = () => {
  return (
    <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/success" element={<Success />} /> 
      <Route path="/cancel" element={<Cancel />} /> 
      <Route path="/cancel" element={<Cancel />} /> 
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/product" element={<Product />} /> 
      <Route path="/productslist" element={<ProductsList />} /> 



    </Routes> 
  </BrowserRouter> 
  );
};

export default App;