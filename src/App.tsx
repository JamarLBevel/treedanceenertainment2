import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,Outlet} from 'react-router-dom';
import Home from './landing';
import Landing from './home';
import SignIn from './signIn';
import SignUp from './signUp';
import { Navbar,Container,Nav } from 'react-bootstrap';

function App() {
  return(
   <BrowserRouter>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="home" element={<Home />} />
<Route path="landing" element={<Landing/>}/>
<Route path="signIn" element={<SignIn/>}/>
<Route path="signUp" element={<SignUp/>}/>
</Routes>
</BrowserRouter> 
  );

}

export default App;
