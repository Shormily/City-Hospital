import React from 'react';
import medical from "../Home/imges/medical.jpg";
import useFirebase from "../Hook/useFirebase";
import {  useState } from "react"
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth';
import { Form } from 'react-bootstrap';
import "./SignUp.css";

const SignUp = () => {
    const {signInUsingGoogle,createNewUserByEmail} = useFirebase();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [isLogin,setIsLogin] = useState(false)
   
  const auth = getAuth()
  
    const handleRegister = e =>{
      e.preventDefault();
      if(password.length < 6){
        setError('password must be at least 6 characters long.')
        return;
      }
      if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
  setError('Password Must contain 2 upper case');
  return;
      }
      if(isLogin){
        processLogin(email,password);
      }
      else{
        registerNewUser(email,password);
      }
      
    }
    const processLogin = (email,password) =>{
      signInWithEmailAndPassword(auth,email,password)
      .then((result) => {
       const user = result.user;
       console.log(user);
       setError('Successfully Log In !!Now Go To Another Page');
      })
      .catch((error) => {
        setError(error.message);
      });
    }
  
      const registerNewUser = (email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user =result.user;
            createNewUserByEmail()
            console.log(user)
            setError('Successfully Sign In!!Now Go To Another Page');
            verifyEmail();
        })
        .catch(error =>{
          setError("already use this email")
        })
       
      }
      const handleResetPassword = () =>{
        sendPasswordResetEmail(auth,email)
        .then(result =>{
  
        })
      }
      const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
          console.log(result);
        })
      }
      
      const toggleLogin = e =>{
        setIsLogin(e.target.checked)
      }
      
    const handleEmailChange = e => {
      setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
      setPassword(e.target.value);
      
    } 
    return (
        <>
      <div className='container'>
        <div className='row d-flex '>
          <h1 className=' pragraph-weight text-primary mt-5 '>Please <span className='text-primary'>{isLogin ? "Login" :" Sign In "}</span>  </h1>
          </div>
          </div>
          <div className='container'>
              <div className='row'>
              <div className=' contact col-md-6 col-12 col-lg-6 container  '>
                <div className=' input-part mt-2 mb-5 '>
                <input
                className=" mb-3 p-3  w-75 shadow"
                placeholder="Name*"
                type="text"
              />
               
                <input
                  required
                  type="text"
                  className="mb-3 p-3  w-75 shadow"
                  placeholder="Email"
                  onChange={handleEmailChange} 
                  
                />
                <input
                  required
                  type="text"
                  className="mb-3 p-3  w-75 shadow"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
                <input
                  required
                  type="text"
                  className="mb-3 p-3  w-75 shadow"
                  placeholder="Re-Type-Password"  
                />
                 <Form.Check onChange={toggleLogin} className='pragraph-weight'  type="checkbox" label="Already You have Account? Please Log In.!!" />
                
                <p className='text-primary   pragraph-weight  '>{error}</p>
                <p  className='text-info  pragraph-weight  ' onClick={handleResetPassword}>Forgot Password? </p>
                <button className='container  log-in-button w-75 ' onClick={handleRegister}>{isLogin ? "Log In" : "Sign In"}</button>
               
               
                <hr className='w-75'/>
                <button className='container w-75  mb-2 Sign-in-button bg-warning' onClick={signInUsingGoogle}>Google Sign In</button>
                </div>
               
              
            </div>
            
            <div className='col-lg-6 col-md-12 c0l-12 mt-5 '>
                  <img className="w-100 p-2 shadow " src={medical} alt="" />
                  
                  </div>
                </div> 
                 
              
              
              </div> 
        </>
    );
};

export default SignUp;