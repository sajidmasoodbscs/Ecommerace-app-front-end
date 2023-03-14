import { Link } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div` 
   flex:1;
   height: 70vh;
   position: relative;
   margin:3px;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
`

const InfoContainer=styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title=styled.h1`
color: white;
margin-bottom: 10px;
text-transform: uppercase;
`

const Button=styled.button`
    font-weight: 600;
    background-color: white;
    color: gray;
    border: none;
    padding: 10px;
    cursor: pointer;
`


const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Link>
        <Image src={item.img}/>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Link>
    </Container>
  )
}

export default CategoriesItem