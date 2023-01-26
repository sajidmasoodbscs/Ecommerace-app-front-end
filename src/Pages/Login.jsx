import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";


const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
`

const Wraper=styled.div`
width: 25%;
background-color: white;
padding: 20px;
${mobile ({width:"80%"})}
`

const Title=styled.h1`
font-weight: 600;
font-family:Arial, Helvetica, sans-serif;
`

const Form=styled.form`
display: flex;
flex-direction:column;
`

const Input=styled.input` 
flex: 1;
min-width: 40%;
padding:10px;
margin: 10px 0px;
`


const Button=styled.button`
margin-bottom: 5px;
width: 40%;
background-color: teal;
border: none;
color: white;
padding: 15px 20px;
`
const Link=styled.a`
    text-decoration: underline;
    font-size: 12px;
    margin: 10px 0px;
    cursor: pointer;
`

const Login = () => {
  return (
<Container>
        <Wraper>
            <Title>Login</Title>
            <Form>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wraper>
    </Container>  )
}

export default Login