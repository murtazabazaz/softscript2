import { useState } from 'react';
import {Box, TextField, Button, styled, Typography} from '@mui/material'

const Component = styled(Box)`
border-radius: 15px;
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6)
`;
const Image = styled('img')({
width: '330px',
margin: 'auto',
display: 'block',
padding: '40px 0 0',
borderRadius: '280%',

});
const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > button, & > p{
    margin-top: 20px;
}
`;
const LoginButton = styled(Button)`
height: 45px;
border-radius: 8px;
`

const SignupButton = styled(Button)`
height: 45px;
border-radius: 8px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`;

const Text = styled(Typography)`
font-size: 16px;
color: #878787;


`;
const Heading = styled(Typography)`
 font-family: Arial, sans-serif; 
  font-size: 46px; 
  color: #387ADF;
  margin-top: 20px; 
  margin-bottom: 5px; 
  text-align: center; 
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

`;




const Login = ()=>{

    const imageUrl = 'https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg';

    const [account, toggleAccount] = useState('login');

    const toggleSignup = () => {

    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
       <Component >
       <Heading>Soft Script</Heading>
       <Box>
        <Image src={imageUrl} alt="login" />
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
        <TextField variant='standard' label="Enter Name"/>
        <TextField variant='standard' label="Enter Username"/>
        <TextField variant='standard' type='password' label="Enter Password"/>

        <SignupButton variant='contained'>Signup</SignupButton>
        <Text style={{textAlign: 'center'}}>OR</Text>
        <LoginButton variant='text' onClick={()=> toggleSignup()}>Already have an Account?</LoginButton>
        </Wrapper>

        }
        </Box>
       </Component>
    )
}
export default Login;