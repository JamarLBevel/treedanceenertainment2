import React from "react";
import { Nav,Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
export default function Jnav(){
    return(
        <div>
        <Navbar style={{background:'#12321d'}} bg="#375848" variant='dark' expand="lg">
                <Navbar.Brand href="home">TREE DANCE</Navbar.Brand>
                  <Nav>
                    <Nav.Item>
                    <Nav.Link style={{background:'#cb3031',fontWeight:'bold'}} className=' p-2   text-light rounded-pill' href='signIn'>Sign In</Nav.Link>
                    </Nav.Item>
                  </Nav>
            </Navbar>
             <Outlet/>
             </div>
    );
}