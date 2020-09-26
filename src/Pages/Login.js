import React,{useEffect} from 'react'
import '../css/Login.css';
import twitterlogo from '../assets/twitterlogo.svg'
import { useHistory } from 'react-router-dom'

function Login() {
    const history=useHistory();

    useEffect(() => {
        document.title = "Login on Twitter / Twitter"
     }, []);
     const login =(e)=>{
         e.preventDefault();
         history.push('/home')

     }
    return (
        <div className="loginpage">
                        <img src={twitterlogo} alt="twitter logo" className="loginpage__logo"/>
                        <h3>Login to Twitter</h3>
                        <div className="loginpage__contentLogin">
                       
                               <input type="text" placeholder="Phone number email or username"/>
                               <input type="password" placeholder="Password"/>
                               <button type="submit"  onClick={login}>Log In</button>
                          
                               
                           </div>
                           <div className="loginpage__contentForgotPassword">
                               Forgot Password?
                           </div>
        </div>
    )
}

export default Login
