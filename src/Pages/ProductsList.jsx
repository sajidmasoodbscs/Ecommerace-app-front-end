import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
display: flex;
  margin: 20px;
  align-items:center;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;


const Option=styled.option``

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px",width:"100%" })}
`;

const ProductList = () => {

const customstyle={
  container: provided => ({
    ...provided,
    width: 150,
    "@media only screen and (max-width: 1200px)": {
      ...provided["@media only screen and (max-width: 1200px)"],
      margin: "10px 0px",
  },
  }),
  option:(defaultStyle,state)=>({
    ...defaultStyle,
    color:state.isSelected?  "#212529" : "black",
    backgroundColor: state.isSelected ? "#a0a0a0" : "#fff",
  }),
  control:(defaultStyle)=>({
    ...defaultStyle,
    marginRight:"5px",
  }),
  singleValue: (defaultStyle)=>({
    ...defaultStyle,
    color: "gray",
  })
};



const location= useLocation();
const cat=location.pathname.split("/")[2];
console.log("categoray is :",cat);

// filteers

const [filters,setFilters]=useState([]);
const [sort,setSort]=useState(null);


const handleChange=async(e)=>{

      const value=e.target.value;
 await setFilters({ ...filters,[e.target.name]:value})  
}

console.log("Filters :",filters,sort);

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select  name="color" onChange={handleChange} style={customstyle}>
            <Option disabled>color</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>green</Option>
            <Option>blue</Option>
          </Select>
          <Select  name="size" onChange={handleChange} style={customstyle}>
          <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="sort" onChange={(e)=>setSort(e.target.value)} style={customstyle}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price(ASC)</Option>
            <Option value="desc">Price(DESC)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters}  sort={sort}/>
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default ProductList;