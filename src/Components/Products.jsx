import styled from "styled-components";
import React, { useEffect, useState } from "react";

// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Products = ({cat ='',filters='',sort}) => {

    const [products, setProducts] = useState([]);
    const [filteredproducs, setFilteredProducts] = useState([]);

    console.log("categoray in props is :",cat);
    console.log("Filters in props is :",filters);
    console.log("Sort in props is :",sort);


    useEffect(()=>{

     const getData=async()=>{
        try{
          const productsResp = await axios.get(cat ? `http://localhost:4000/api/products/?category=${cat}`:`http://localhost:4000/api/products`);
          setProducts(productsResp.data);
          // console.log("Products data :",products);
        }catch(error){
          if(error.response){
                // when request made and server responed
                console.log("Error Respose",error.response)
              }else if (error.request){
                // when request made but server not responsed
                console.log("Error Request",error.request)
              } else {
                // when seomthing starnge request not made to server
                console.log("Error Request",error.message)
              }      
        }
     } 
     getData();
    },[cat]);

    useEffect(()=>{

      setFilteredProducts(
        cat &&  products.filter((item)=> Object.entries(filters).every(([key,value])=>(
                  item[key].includes(value)
        )
       ))
      )
    },[products,cat,filters]);

    useEffect(()=>{

      setFilteredProducts(
        products.filter((item)=> Object.entries(filters).every(([key,value])=>(
                  item[key].includes(value)
        )
       ))
      )
    },[products,filters]);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    console.log("Products ,",products);
    console.log("Filltered Products ,",filteredproducs);

    


    useEffect(() => {
      // Sort by latest date:
      if(sort){
      if (sort === "newest") {
        setFilteredProducts(prev =>
          [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt)
        ))
      } else if (sort === "asc") {
        setFilteredProducts(prev =>
          [...prev].sort((a, b) => a.price - b.price)
        )
      } else if (sort === "desc") {
        setFilteredProducts(prev =>
          [...prev].sort((a, b) => b.price - a.price)
        )
      } else {
        // Sort by oldest date:
        setFilteredProducts(prev =>
          [...prev].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        )
      }
    }
    }, [sort]);


  return (

    <Container>
      {cat
        ? filteredproducs.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};


export default Products;
