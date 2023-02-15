import {FavoriteBorder, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Info=styled.div`
opacity: 0;
position: absolute;
top:0;
left:0;
height:100%;
width:100%;
display: flex;
align-items:center;
justify-content:center;
z-index: 3;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;

`
const Container=styled.div`
flex:1;
min-width: 300px;
height: 350px;
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
opacity: 1;
}

`

const Circle=styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`

const Image=styled.img`
width:75%;
z-index: 2;
`

const Icon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 3px;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform:scale(1.1);
}

`

const Product = ({item}) => {

    console.log("Item is here ",item);
  return (
    <Container>
        <Image src={item.img}></Image>
        <Circle />
        <Info>
            <Icon>
            <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <FavoriteBorder/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product