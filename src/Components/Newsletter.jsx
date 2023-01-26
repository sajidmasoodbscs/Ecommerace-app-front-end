import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";


const Container=styled.div`
    height: 60vh;
    padding: 20px;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const Title=styled.h1`
    font-size: 70px;
    margin-bottom:20px;
`

const Desc=styled.p`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile ({textAlign:"center"})}

`

const Inputcontainer=styled.div`
    width: 50%;
    background-color: white;
    justify-content: space-between;
    display: flex;
    ${mobile ({width:"80%"})}

`
const Input=styled.input`
flex: 8;
border: none;
padding-left: 20px;
`
const Button=styled.button`
    cursor: pointer;
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>
        Get timely updates from your favorite products.
        </Desc>
        <Inputcontainer>
        <Input placeholder='Your Email'></Input>
        <Button>
        <Send/>
        </Button>
        </Inputcontainer>
    </Container>
  )
}

export default Newsletter
