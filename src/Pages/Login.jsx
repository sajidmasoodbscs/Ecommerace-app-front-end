import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import axios from "axios"
import { Navigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";



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

const Label=styled.label`
    color: red;
    font-size: 14px;
`

const Login = () => {

    const [Email,setEmail]=useState(null);
    const [Loginerror,setLoginerror]=useState();
    //   const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const [Password, setPassword] = useState({
      password: "",
      showPassword: false,
    });
    
    // const navigate=useNavigate();
    const handleClickShowPassword = () => {
      setPassword({ ...Password, showPassword: !Password.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const handlePasswordChange = (prop) => (event) => {
      setPassword({ ...Password, [prop]: event.target.value });
    };

    let isLoginSuccess=false;

    // const [token,setToken]=useState(null)
    let user=null;
    const handleSubmit=async(e)=>{
      console.log("Password : ",Password.password);
    e.preventDefault();

     user= await userLogin({
        Email,
        Password
    });

    if(user){
      // setauthenticated(true);
      console.log("response from function is user login:")
      // localStorage.setItem("authenticated", true);
      // navigate("/");

    }else{
      console.log("response from function is no user:")
    }

}




async function userLogin(credentiols){

    console.log("credentiols are :",credentiols)
    return axios.post('http://localhost:4000/api/auth/login', {
        email:credentiols.Email,
        password:credentiols.Password.password
      })
      .then(function (response) {
        console.log("response from login api",response);
        console.log("Status of login api",response.status);
        console.log("Message of login api",response.data.message);
        isLoginSuccess=true;
        return isLoginSuccess;
      })
      .catch(function (error) {
        console.log("Error message from login api :",error.response.data);
        console.log("Login Api call status code  :",error.response.status);
        setLoginerror(error.response.data);
      });
}

  return (
<Container>
        <Wraper>
            <Title>Login</Title>
            { isLoginSuccess && (
              <Navigate  to="/" replace={true} />
             )}
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Email"  type="text" name="uname"  onChange={(e)=> setEmail(e.target.value)} required/>
                <Input placeholder="Password" type={Password.showPassword ? "text" : "password"} 
                value={Password.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {Password.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                name="pass" onChange={handlePasswordChange("password")} required
                />
                <Button  type="submit" >LOGIN</Button>
                {Loginerror?<Label>{Loginerror}</Label>:null}          
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wraper>
    </Container>  )
}

export default Login