import React from "react";
import { useNavigate } from "react-router-dom";
import  { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 3 && password.length > 4;
    }
  
    async function loginUser(event) {
      event.preventDefault()
  
      const response = await fetch('http://localhost:1337/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      const data = await response.json();
         
          if(data.user){
            localStorage.setItem('token',data.user)
            alert("login success");
            window.location.href='/success';
          }
          else{
            alert("please try again")
          }
  
      
    }
  
    let navigate=useNavigate();
    return (<div id="loginform">
        
        <Form className=" rounded p-4 p-sm-3">
        <h2 id="headerTitle">Login</h2>  
        <Form.Group size="lg" controlId="email" className="mb-3"> 
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            placeholder="Enter your e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </Form.Group>
        
        <Form.Group size="lg" controlId="password" className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
          placeholder="Enter your Password"
            type="password"
            value={password}
           
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Button block="true" size="lg" id="button2" onClick={loginUser} disabled={!validateForm()}>
          Login
        </Button>
        <Button className=" my-3" id="button2" size="lg"  onClick={()=>{navigate("/");}}>To Home</Button>
      </Form>
      
        
       
        
        
        
        
        </div>)
}