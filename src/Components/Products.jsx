import styled from "styled-components";
import React, { useEffect, useState } from "react";

// import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = () => {
  const [productsdata, setProductsdata] = useState(null);

  const getApiData = async () => {
    const url = "http://localhost:4000/api/products/";
    const response = await fetch(
      url,{headers :{
        token :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNlNGQzZGFmNDY0ODIxYWI5YzdhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjM0OTU0MSwiZXhwIjoxNjc2MzU2NzQxfQ.da-B8PZ9L7U-BBviQaH8STBc4aPTX6OexBI944i_xWU"
      }
    }
    ).then(async(response) => await response.json());
  
    // update the state
    setProductsdata(response);
  };

  useEffect(() => {
    getApiData();
  }, []);


  return (
    <Container>
      {productsdata &&
        productsdata.map((item) => (
          // console.log("Item is here,",item)
          <Product item={item} key={item._id} />
        ))}
    </Container>
  );
};

export default Products;
