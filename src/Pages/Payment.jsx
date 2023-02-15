import { loadStripe } from "@stripe/stripe-js"; 
import React, { useState } from "react"; 

function Stripepayment(){

  const [product, setProduct]=useState({
    name:'T-Shirt',
    price:1000,
    productOwner:"ShopKro",
    description: "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
    quantity :1
  });


}

export default Stripepayment;