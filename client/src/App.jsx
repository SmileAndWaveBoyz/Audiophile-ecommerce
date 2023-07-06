import { Footer } from './components/Footer';
import Gear from "./components/Gear";
import Home from "./pages/Home"
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Xx99ii from './pages/Xxi99ii';
import NavBar from "./components/Navbar"
import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [backendData, setBackEndData] = useState([{}]);
  

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackEndData(data)
      }
    )
  }, [])


  return (
    <>

        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/headphones' element={<Headphones/>}/>
          <Route path='/xx99mii' element={<Xx99ii/>}/>
      

          <Route path='/speakers' element={<Speakers/>}/>          
          <Route path='/earphones' element={<Earphones/>}/>          
        </Routes>

    </>
  )
}

export default App