import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive";


const Container=styled.div`
display: flex;
padding: 20px;
${mobile ({flexDirection:"column"})}
`
const Logo=styled.h1`

`
const Desc=styled.p`
  margin: 20px 0px;
`
const SocialContainer=styled.div`
display: flex;
`
const Socialicon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
color: white;
margin: 5px;
cursor: pointer;
`
const Left=styled.div`
flex: 1;
padding: 20px;
`
const Title=styled.h3`
margin-bottom: 30px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom:10px;
`

const Center=styled.div`
flex: 1;
padding: 20px;
`

const Right=styled.div`
flex: 1;
padding: 20px;
`
const ContactItem=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Payment=styled.img`
width:50%;
`

const Footer = () => {
  return (
   <Container>
    <Left>
        <Logo>ShopKro</Logo>
        <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</Desc>
        <SocialContainer>
            <Socialicon color="3B5999">
                <Facebook/>
            </Socialicon>
            <Socialicon color="E4405F">
                <Twitter/>
            </Socialicon>
            <Socialicon color="55ACEE">
                <Instagram/>
            </Socialicon>
            <Socialicon color="E60023">
                <Pinterest/>
            </Socialicon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
    </Center>
    <Right>
    <Title>Contacts</Title>
    <ContactItem><Room style={{marginRight:"10px"}}/>ICL Lab, KICS UET</ContactItem>
    <ContactItem><Phone style={{marginRight:"10px"}}/>+923055860230</ContactItem>
    <ContactItem><MailOutline style={{marginRight:"10px"}}/>sajidmasood351@gmail.com</ContactItem>
    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
    </Right>
   </Container>
  )
}

export default Footer
