import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Select from "react-select";
import { mobile } from "../responsive";
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';



const Container=styled.div``

const Wrapper=styled.div`
    display: flex;
    padding: 50px;
    ${mobile({flexDirection: "column",padding:"5px" })}
`
const Imagecontainer=styled.div`
flex:1;
`

const Image=styled.img`
width: 100%;
`

const Infocontainer=styled.div`
flex:1;
padding: 0px 30px;
${mobile({padding: "5px 5px" })}

`

const Tilte=styled.h1`
font-weight: 100;
`

const Desc=styled.p`
margin: 20px 0px;
${mobile({margin: "10px 0px" })}

`

const Price=styled.span`
font-weight: 200;
font-size: 20px;
`
const Filtercontainer=styled.div`
display: flex;
justify-content: space-between;
width: 60%;
margin:30px 0px;
${mobile({width: "100%", margin:"10px 0px" })}

`

const Filter=styled.div`
display: flex;
align-items: center;
`

const Filtertitle=styled.div`
font-weight: 100;
font-size: 20px;
`

const Filtercolor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin-left: 10px;
cursor: pointer;
background-color: ${props=>props.color};
`

// const Filtersize=styled.select`
// padding:5px;
// margin-left: 3px;
// `


const Addcontainer=styled.div`
display: flex;
justify-content: space-between;
width:60%;
margin: 50px 0px;
${mobile({width: "100%"})}
`
const Ammountcontainer=styled.div`
display: flex;
align-items: center;
font-size: 16px;
`
const Ammount=styled.span`
font-weight: 700px;
border-radius: 5px;
border: 1px solid teal;
padding: 5px 15px;
`
const Button=styled.button`
background-color: white;
border: 2px solid teal;
padding: 10px;
font-weight: 500;
margin-left: 10px;
cursor: pointer;

&:hover {
    background-color: #f8f4f4;
}
`

const Product = () => {
    const sizeOptions = [
        { value: "XS", label: "XS" },
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
        { value: "XXL", label: "XXL" },
      ];

      const customstyle={
        container: defaultStyle => ({
          ...defaultStyle,
          marginLeft: "5px",
          marginRight:"0px"
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
    <Wrapper>
    <Imagecontainer>
        <Image src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/09/Frame-47.png"></Image>
    </Imagecontainer>
    <Infocontainer>
        <Tilte>Decent Style</Tilte>
        <Desc>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo.
        </Desc>
        <Price>$10</Price>
        <Filtercontainer>
            <Filter>
                <Filtertitle>Color: </Filtertitle>
                <Filtercolor color="Black"/>
                <Filtercolor color="blue"/>
                <Filtercolor color="red"/>
            </Filter>
            <Filter>
                <Filtertitle>Size: </Filtertitle>
                <Select options={sizeOptions} styles={customstyle} />
            </Filter>
        </Filtercontainer>
        <Addcontainer>
            <Ammountcontainer>
                <Remove sx={{ fontSize: "30px" }}/>
                <Ammount>1</Ammount>
                <Add sx={{ fontSize: "30px" }}/>
            </Ammountcontainer>
            <Button>Add to Cart</Button>
        </Addcontainer>
    </Infocontainer>
    </Wrapper>
    <Newsletter />
    <Footer />
   </Container>

  )
}

export default Product
