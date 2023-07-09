import Home from "./pages/Home"
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Xx99ii from './pages/Xx99ii';
import Xx99i from './pages/Xx99i';
import Xx59 from "./pages/Xx59";
import Zx9 from "./pages/Zx9";
import Zx7 from "./pages/Zx7";
import NavBar from "./components/Navbar"
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

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
          <Route path='/headphones/xx99mii' element={<Xx99ii/>}/>
          <Route path='/headphones/xx99mi' element={<Xx99i/>}/>
          <Route path='/headphones/xx59' element={<Xx59/>}/>

          <Route path='/speakers' element={<Speakers/>}/>    
          <Route path='/speakers/zx9' element={<Zx9/>}/>      
          <Route path='/speakers/zx7' element={<Zx7/>}/>      

          <Route path='/earphones' element={<Earphones/>}/>          
        </Routes>

    </>
  )
}

export default App