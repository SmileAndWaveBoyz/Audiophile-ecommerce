import Home from "./pages/Home"
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Xx99ii from './pages/Xx99ii';
import Xx99i from './pages/Xx99i';
import Xx59 from "./pages/Xx59";
import Zx9 from "./pages/Zx9";
import Zx7 from "./pages/Zx7";
import Yx1 from "./pages/Yx1";
import Checkout from "./pages/Checkout";
import NavBar from "./components/Navbar"
import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

function App() {
  const [backendData, setBackEndData] = useState([{}]);
  const [cartDisplayBox, setCartDisplayBox] = useState("none");
  const [cartDisplayFadeOpacity, setCartDisplayFadeOpacity] = useState(0);
  const [cartDisplayFadeZindex, setCartDisplayFadeZindex] =useState(-1);
  
  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackEndData(data)
      }
    )
  }, [])

  function cartClick() {
    if (cartDisplayBox === "none") {
      setCartDisplayBox("block")
      setCartDisplayFadeOpacity(0.5)
      setCartDisplayFadeZindex(1)
    } else{
      setCartDisplayBox("none")
      setCartDisplayFadeOpacity(0.0)
      setCartDisplayFadeZindex(-1)
    }
  }

  const location = useLocation();
  const navigate = useNavigate();


  return (
    <>

        <NavBar onCartClick={cartClick}/>
        <div className="fadeDiv" style={{opacity: cartDisplayFadeOpacity, zIndex: cartDisplayFadeZindex}}></div>
        <div className="checkOutBox" style={{display: cartDisplayBox}}>
          <div className="checkOutBox__heading-box">
            <h2 className="checkOutBox__heading-box-heading">CART (3)</h2>
            <button className="checkOutBox__heading-box-remove-button">Remove all</button>
          </div>
          
          <div className="checkOutBox__scrollbox">
          <div className="checkOutBox__item-container">
              <div className="checkOutBox__item-container-image-box">
                <img src="../assets/product-xx99-mark-two-headphones/mobile/mk2.png" alt="XX99 MK 2 headphones"/>
              </div>

              <div className="checkOutBox__item-container-text-box">
                <p className="checkOutBox__item-container-title">XX99 MK II</p>
                <p className="checkOutBox__item-container-price">$2,999</p>
              </div>

              <div className="checkOutBox__quantity-box">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
          </div>
          
          
          <div className="checkOutBox__item-container">
              <div className="checkOutBox__item-container-image-box">
                <img src="../assets/product-xx99-mark-two-headphones/mobile/mk2.png" alt="XX99 MK 2 headphones"/>
              </div>

              <div className="checkOutBox__item-container-text-box">
                <p className="checkOutBox__item-container-title">XX99 MK II</p>
                <p className="checkOutBox__item-container-price">$2,999</p>
              </div>

              <div className="checkOutBox__quantity-box">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
          </div>
          
          <div className="checkOutBox__item-container">
              <div className="checkOutBox__item-container-image-box">
                <img src="../assets/product-xx99-mark-two-headphones/mobile/mk2.png" alt="XX99 MK 2 headphones"/>
              </div>

              <div className="checkOutBox__item-container-text-box">
                <p className="checkOutBox__item-container-title">XX99 MK II</p>
                <p className="checkOutBox__item-container-price">$2,999</p>
              </div>

              <div className="checkOutBox__quantity-box">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
          </div>
          
          </div>

          <div className="checkOutBox__total-text-box">
            <p className="checkOutBox__total-text-box-total">TOTAL</p>
            <p className="checkOutBox__total-text-box-price">$5,396</p>
          </div>

          <button className="checkOutBox__checkout-button" onClick={() => {navigate('/checkout'); cartClick();}}>CHECKOUT</button>
        </div>

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
          <Route path='/earphones/yx1' element={<Yx1/>}/>          

          <Route path='/checkout' element={<Checkout/>}/>  
        </Routes>



    </>
  )
}

export default App