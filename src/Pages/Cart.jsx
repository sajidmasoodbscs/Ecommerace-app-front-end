import React, { useState } from "react"; 
import Navbar from "../Components/Navbar"
import Announcements from "../Components/Announcements"
import Footer from "../Components/Footer"
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from "../responsive";
import { loadStripe } from "@stripe/stripe-js"; 




const Wraper=styled.div`
padding: 20px;
${mobile ({padding:"10px"})}
`
const Title=styled.h1`
font-weight: 300;
text-align: center;
`

// TOP
const Top=styled.div`
display: flex;
justify-content: space-between;
margin: 20px;
`

const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type ==="filled" && "none"};
background-color: ${props => props.type ==="filled"? "Black" :"transparent"};
color: ${props => props.type ==="filled" && "white"};
`
const Toptexts=styled.div`
${mobile ({display:"none"})}

`
const Toptext=styled.span`
margin: 0px 10px;
cursor: pointer;
text-decoration: underline;
`

// Bottom 
const Bottom=styled.div`
display: flex;
justify-content: space-between;
${mobile ({flexDirection:"column"})}

`

const Info=styled.div`
flex: 3;
border: 0.5px solid gray;
border-radius: 10px;
margin: 0px 5px 5px 0px;
`
const Product=styled.div`
padding: 10px 0px;
display: flex;
justify-content: space-between;
${mobile ({flexDirection:"column"})}
`
const Productdetails=styled.div`
display: flex;
flex: 2;
`

const Imagesec=styled.div`
width:30%;
padding-top:20px;
`

const Image=styled.img`
width:100%;
max-height:200px;
`
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName=styled.span``
const Productdetailh=styled.span`
font-weight: 400;
font-family: Arial, Helvetica, sans-serif;
`
const ProductId=styled.span``

const ProdcutColorDetail=styled.div`
display: flex;
`

const ProductColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin-left: 10px;
`
const ProductSize=styled.span``


const Pricedetail=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Productamountcontainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Productamount=styled.span`
font-size: 24px;
  margin: 5px;
`
const Price=styled.div`
font-size: 30px;
font-weight: 200;
`
const Priceheading=styled.span``

const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 0px 50px;
`

const Summary=styled.div`
flex: 1;
padding: 20px;
border: 0.5px solid gray;
border-radius: 10px;
height: 50vh;
${mobile ({marginTop:"10px"})}

`
const SummaryTtile=styled.h1`
font-weight: 200;
`

const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type ==="total" && "500"};
font-size: ${props => props.type ==="total" && "24px"};

`

const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``

const SummaryButton=styled.button`
width: 100%;
padding: 10px;
font-weight: 600;
background-color: black;
color: white;

`



const Cart = () => {


    const [product, setProduct]=useState();

    setProduct({
        name:'Shoes',
        price:2000,
        productOwner:"ShopKro",
        description: "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
        quantity :2,
      });
      
  const publishableKey='pk_test_51MZRE8Jd9hG7xuujuafBxiH30Ftj9gxagzeiDwtgGfouXo1gHRVvuShdi6tTNN50Sa3JjwOafd0mC3MQmnvuVyUY00CGWtM9P0'
  
  // make payment fucntion

  const makepayment= async()=>{

    const stripe=await loadStripe(publishableKey);
    const url = "http://localhost:4000/api/payment/create-checkout-session";
    const body={product};
    const headers={
        "Content-Type": "application/json",
        "token" :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNlNGQzZGFmNDY0ODIxYWI5YzdhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjM0OTU0MSwiZXhwIjoxNjc2MzU2NzQxfQ.da-B8PZ9L7U-BBviQaH8STBc4aPTX6OexBI944i_xWU",
    }


    console.log("Body will be : " ,body);

    const response=await fetch(url,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(body) 
    })

    const session=await response.json();

    const result=stripe.redirectToCheckout({
        sessionId:session.id
    })

    if(result.error){
        console.log(result.error)
    }
  }   // make payment fucntion end

  return (
    <div>
        <Navbar/>
        <Announcements/>
        <Wraper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTUINE SHOPPING</TopButton>
                <Toptexts>
                    <Toptext>Shopping Bag (3)</Toptext>
                    <Toptext>Your Wishlist (0)</Toptext>
                </Toptexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <Productdetails>
                            <Imagesec>
                            <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'></Image>
                            </Imagesec>
                            <Details>
                            <ProductName>
                                <Productdetailh>Product:</Productdetailh> JESSIE THUNDER SHOES
                            </ProductName>
                            <ProductId><Productdetailh>ID: </Productdetailh> 83364736473</ProductId>
                            <ProdcutColorDetail>
                            <Productdetailh>Color:</Productdetailh>
                            <ProductColor color='black'/>
                            </ProdcutColorDetail>
                            <ProductSize><Productdetailh>Size: </Productdetailh> 41</ProductSize>
                            </Details>
                        </Productdetails>
                        <Pricedetail>
                            <Productamountcontainer>
                                <Add/>
                                <Productamount>2</Productamount>
                                <Remove/>
                            </Productamountcontainer>
                            <Price><Priceheading>Price: </Priceheading> $ 30</Price>
                        </Pricedetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <Productdetails>
                            <Imagesec>
                            <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'></Image>
                            </Imagesec>
                            <Details>
                            <ProductName>
                                <Productdetailh>Product:</Productdetailh> Slim Fit Casual Shirt For Men
                            </ProductName>
                            <ProductId><Productdetailh>ID: </Productdetailh> 2345736473</ProductId>
                            <ProdcutColorDetail>
                            <Productdetailh>Color:</Productdetailh>
                            <ProductColor color='#2E5A88'/>
                            </ProdcutColorDetail>

                            <ProductSize><Productdetailh>Size: </Productdetailh>S</ProductSize>
                            </Details>
                        </Productdetails>
                        <Pricedetail>
                            <Productamountcontainer>
                                <Add/>
                                <Productamount>2</Productamount>
                                <Remove/>
                            </Productamountcontainer>
                            <Price><Priceheading>Price: </Priceheading> $ 30</Price>
                        </Pricedetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTtile>ORDER DETAIL</SummaryTtile>
                    <SummaryItem>
                        <SummaryItemText>Sub Total</SummaryItemText>
                        <SummaryItemPrice>$80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Charges</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton onClick={() => makepayment()}>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wraper>
        <Footer/>
    </div>
  )
}

export default Cart