import {Search, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge } from '@mui/material';

import { mobile } from "../responsive";

import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
height: 60px;
background-color: #565252;
color: white;
position: sticky;
top: 0;
z-index: 999;
${mobile ({height:"50px"})}
`
const Wraper=styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
align-items: center;
${mobile ({padding:"10px 0px"})}
`
const Left=styled.div`
flex:1;
display: flex;
align-items:center;
`
const Language=styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile ({display:"none"})}
`
const Searchcontainer=styled.div`
display: flex;
align-items: center;
border: 1px solid lightgray;
margin-left: 25px;
padding: 5px;
${mobile ({margin:"5px"})}
`

const Input=styled.input`
    border: none;
    ${mobile ({width:"60px"})}
`
const Center=styled.div`
flex:1;
align-items: center;
justify-content: center;
display: flex;
`
const Logo=styled.h1`
font-size: 24px;
${mobile ({fontSize:"10px 0px"})}
`
const Right=styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile ({flex:1,justifyContent:"flex-Start"})}
`
const Menuitem=styled.div`
font-size: 14px;
margin-left: 25px;
cursor: pointer;
${mobile ({marginLeft:"5px",fontSize:"12px"})}
`

function Navbar() {
  return (
    <Container>
      <Wraper>
        <Left>
            <Language>EN</Language>
            <Searchcontainer>
                <Input placeholder='Search'></Input>
                <Search sx= {{ fontSize:'16px', color:'gray' }}/>
            </Searchcontainer>
        </Left>
        <Center>
            <Logo>Shopkro</Logo>
        </Center>
        <Right>
            <Menuitem>Register</Menuitem>
            <Menuitem>Login</Menuitem>
            <Menuitem>
            <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlined/>
            </Badge>
            </Menuitem>
        </Right>
      </Wraper>
    </Container>
  )
}

export default Navbar
