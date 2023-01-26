import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcements from "../Components/Announcements";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";

import Select from "react-select";


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
  ${mobile({ width: "0px 30px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   ${mobile({ margin: "10px 0px" })}
// `;

const ProductList = () => {

  const colorOptions = [
    { value: "blues", label: "Color" },
    { value: "rock", label: "White" },
    { value: "jazz", label: "Black" },
    { value: "orchestra", label: "Red" },
    { value: "orchestra", label: "Blue" },
    { value: "orchestra", label: "Yellow" },
    { value: "orchestra", label: "Green" },

  ];
  
  const sizeOptions = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },

  ];

  const sortBy = [
    { value: "Price(ASC)", label: "Price(ASC)" },
    { value: "Price(DESC)", label: "Price(DESC)" }
  ];
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

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select options={colorOptions} styles={customstyle} />
          <Select options={sizeOptions} styles={customstyle} />
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select options={sortBy} styles={customstyle} />
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;