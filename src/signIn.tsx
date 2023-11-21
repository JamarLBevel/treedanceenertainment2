import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Container,Form,Button,Alert } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
export default function SignIn(){
    const [show,setShow] = useState(false);
    const auth = getAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("")
    const navigate = useNavigate();
    function signIn(){
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    //window.location.replace('http://localhost:3000/movies');
    navigate('/landing');
    console.log("gogogogogo")
    // ...
  })
  .catch((error) => {

    const errorMessage = error.message;
    setError(errorMessage);
    setShow(true)
    console.log(errorMessage);
  });

    }
    return(

        <div style={{backgroundColor:'black',width:'100%',height:'100%',position:'fixed',color:'white'}}>
           <h1 className="p-3">
           sign in 
        </h1>
         <Container fluid>

      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address </Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="johnwick@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
      </Form.Group>
    </Form>
    <div className="d-grid gap-1">
    <Button onClick={signIn} size="lg" variant="warning">Sign In</Button>
    </div>
    <Alert className="p-5 mt-3" show={show} variant="dark">
        <Alert.Heading>error signing in</Alert.Heading>
        <p>
         {error}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
   </Container>
    </div>
    );
}

