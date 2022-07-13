import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

import Success from "./components/Success";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function App() {
    return(
      <>
      <Router>
      
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        
        
{/*         
          <Link to="/">Home</Link>

        
          <Link to="/Login">Login</Link>

        
          <Link to="/Register">Register</Link>

        
          <Link to="/Dashboard">Dashboard</Link>

        
          <Link to="/Success">Success</Link> */}

        </Navbar>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
         
          <Route path="/Success" element={<Success />} />
        </Routes>
      </Router>
      </>
    )

    
}

export default App;