import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import styled from "styled-components"
import {slideItems} from "../data";
import {mobile} from "../responsive"



const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow:hidden;
    ${mobile ({display:"none"})}
`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #f8e9e9;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: ${props => props.direction === "Right" && "10px"};
    left: ${props => props.direction === "Left" && "10px"};
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideindex * -100}vw);
    `
const Slide=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${props=>props.bg};
`

const ImgContainer=styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
height: 80%;
`
const InfoContainer=styled.div`
flex: 1; 
padding :50px ;
`

const Title=styled.h1`
font-size: 70px;
text-transform: uppercase;
`
const Desc=styled.p`
    font-size: 20px;
    letter-spacing: 3px;
    margin: 50px 0px;
    font-weight: 500;`
const Button=styled.button`
    padding: 10px;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
`
const Slider = () => {

    const [slideindex,setSlideindex]=useState(0);
    const handleclick=(direction)=>{
        
        if(direction ==="left"){

            setSlideindex(slideindex > 0 ? slideindex-1 : 2)

        }else{
            setSlideindex( slideindex<2 ? slideindex +1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction="Left" onClick={()=>handleclick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideindex={slideindex}>
        {
        slideItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                        <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {item.title}
                     </Title>
                    <Desc>
                    {item.desc}
                    </Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
           ))
        } 
        </Wrapper>
        <Arrow direction="Right" onClick={()=>handleclick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
