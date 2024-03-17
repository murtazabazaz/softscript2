import { useState } from 'react';
import {Box, TextField, Button, styled, Typography} from '@mui/material'
import logo from "./logo.jpg"

import { API } from '../../service/api';

const Component = styled(Box)`
border-radius: 15px;
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6)
`;
const Image = styled('img')({
width: '300px',
height: '280px',
 margin: 'auto',
 display: 'flex',
 padding: '10px 5px 0',
 borderRadius: '100%',

});
const Wrapper = styled(Box)`
padding: 20px 35px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > button, & > p{
    margin-top: 20px;
}
`;
const LoginButton = styled(Button)`
height: 38px;
border-radius: 8px;
`

const SignupButton = styled(Button)`
height: 38px;
border-radius: 8px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`;

const Text = styled(Typography)`
font-size: 16px;
color: #878787;
`;

// const Heading = styled(Typography)`
//  font-family: Arial, sans-serif; 
//   font-size: 46px; 
//   color: #387ADF;
//   margin-top: 20px; 
//   margin-bottom: 5px; 
//   text-align: center; 
//   text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

// `;

const signupInitialValues = {
    name:  '',
    username: '',
    password: ''
}


const Login = ()=>{



    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);

    const toggleSignup = () => {

    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e)=> {
     setSignup({ ...signup, [e.target.name]: e.target.value});

    }

    const signupUser = async() => {
    let response  =  await  API.userSignup(signup);

    }

    return (
       <Component >
     
       <Box>
        <Image src={logo} alt="login" />
        {
        account ==='login' ?
         <Wrapper>
         <TextField variant='standard' label="Enter Username"/>
         <TextField variant='standard' type='password' label="Enter password"/>
         <LoginButton variant='contained'>Login</LoginButton>
         <Text style={{textAlign: 'center'}}>OR</Text>
         <SignupButton variant='text' onClick={() => toggleSignup()}>Create an Account</SignupButton>
         </Wrapper>
        :
        <Wrapper>
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='name' label="Enter Name"/>
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='UserName' label="Enter Username"/>
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='Password' type='password' label="Enter Password"/>

        <SignupButton variant='contained' onClick={() => signupUser()}>Signup</SignupButton>
        <Text style={{textAlign: 'center'}}>OR</Text>
        <LoginButton variant='text' onClick={()=> toggleSignup()}>Already have an Account?</LoginButton>
        </Wrapper>

        }
        </Box>
       </Component>
    )
}
export default Login;