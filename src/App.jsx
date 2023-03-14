import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Success from "./Pages/success"
import Cancel from "./Pages/cancel"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Product from "./Pages/Product"
import ProductsList from "./Pages/ProductsList"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import axios from "axios"

const App = () => {

  // const user=localStorage.getItem("authenticated");

  console.log()

  axios.defaults.withCredentials = true;


  return (
    <BrowserRouter> 
    <Routes> 
      {/* <Route exact path="/" element={ user ? <Home /> :<Navigate to='/login' />} />  */}
      <Route exact path="/" element={ <Home />} />

      <Route path="/success" element={<Success />} /> 
      <Route path="/cancel" element={<Cancel />} /> 
      <Route path="/cart" element={<Cart />} /> 

      {/* <Route path="/login" element={ user ? <Navigate to='/' /> : <Login />} />  */}
      <Route path="/login" element={<Login />} /> 

       {/* <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />  */}
       <Route path="/register" element={<Register />}/> 

      <Route path="/product/:id" element={<Product />} /> 
      <Route path="/products/:category" element={<ProductsList />} />
      <Route path="/products" element={<ProductsList />} />

    </Routes> 
  </BrowserRouter> 
  );
};

export default App;