import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [name,setName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
   
  
    async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json();
        if(data.status==='ok'){
            navigate('/Login');
        }

		
	}
    let navigate=useNavigate();
    return (<div id="loginform">
         <Form className="rounded p-4 p-sm-3">
         <h2 id="headerTitle">Create an account</h2>
            <Form.Group size="lg" controlId="name" className="mb-3">
                
                <Form.Label>Name</Form.Label>
                <Form.Control
                    autoFocus
                    placeholder="Enter your Name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group >
            <Form.Group size="lg" controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            <Button onClick={registerUser}  id="button2"  >Register</Button>
            
            <Button id="button2" className=" my-3" onClick={()=>{navigate("/");}}>To Home</Button>
          
        
      </Form>
        
       
            
        
        
        </div>)
}