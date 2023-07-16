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
import axios from 'axios';

function App() {
  const [cartDisplayBox, setCartDisplayBox] = useState("none");
  const [cartDisplayFadeOpacity, setCartDisplayFadeOpacity] = useState(0);
  const [cartDisplayFadeZindex, setCartDisplayFadeZindex] = useState(-1);
  
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    refreshCart();
  }, []);

  function refreshCart() {
      fetch('/api/cart')
        .then((response) => response.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error('Error fetching cart items:', error));   
  }

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

    refreshCart();    
  }

  useEffect(() => {
    console.log(cartItems[0]); // This will show the updated value of cartItems
    if(cartItems.length > 0){
      setXx99mk2Quantity(cartItems[0].quantity);
      setXx99mk1Quantity(cartItems[1].quantity);
      setXx59Quantity(cartItems[2].quantity);
      setZx9Quantity(cartItems[3].quantity);
      setZx7Quantity(cartItems[4].quantity);
      setYx1Quantity(cartItems[5].quantity);

      setTotal((cartItems[0].quantity * cartItems[0].price) + (cartItems[1].quantity * cartItems[1].price) + (cartItems[2].quantity * cartItems[2].price) + (cartItems[3].quantity * cartItems[3].price) + (cartItems[4].quantity * cartItems[4].price) + (cartItems[5].quantity * cartItems[5].price));
    }
  }, [cartItems]);

  const location = useLocation();
  const navigate = useNavigate();

  const[xx99mk2Quantity, setXx99mk2Quantity] = useState(0);
  const[xx99mk1Quantity, setXx99mk1Quantity] = useState(0);
  const[xx59Quantity, setXx59Quantity] = useState(0);
  const[zx9Quantity, setZx9Quantity] = useState(0);
  const[zx7Quantity, setZx7Quantity] = useState(0);
  const[yx1Quantity, setYx1Quantity] = useState(0);

  const[total, setTotal] = useState(0);

  useEffect(() => {
    if(cartItems.length > 0){
    setTotal((xx99mk2Quantity * cartItems[0].price) + (xx99mk1Quantity * cartItems[1].price) + (xx59Quantity * cartItems[2].price) + (zx9Quantity * cartItems[3].price) + (zx7Quantity * cartItems[4].price) + (yx1Quantity * cartItems[5].price));
    }
  }, [xx99mk2Quantity, xx99mk1Quantity, xx59Quantity, zx9Quantity, zx7Quantity, yx1Quantity]);

  return (
    <>
        <NavBar onCartClick={cartClick}/>
        <div className="fadeDiv" style={{opacity: cartDisplayFadeOpacity, zIndex: cartDisplayFadeZindex}}></div>
        <div className="checkOutBox" style={{display: cartDisplayBox}}>
          <div className="checkOutBox__heading-box">
            <h2 className="checkOutBox__heading-box-heading">CART (3)</h2>
            <button className="checkOutBox__heading-box-remove-button">Remove all</button>
          </div>
          
          {
          (cartItems.length > 0) ? 
          (
            <div className="checkOutBox__scrollbox">
              {
                (cartItems[0].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-xx99-mark-two-headphones/mobile/mk2.png" alt="XX99 MK 2 headphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">XX99 MK II</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[0].price * xx99mk2Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (xx99mk2Quantity > 0) {
                                                setXx99mk2Quantity(xx99mk2Quantity - 1)
                                              } else{
                                                setXx99mk2Quantity(0);
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx99mk2Quantity}</p>
                      <button onClick={() => setXx99mk2Quantity(xx99mk2Quantity + 1)}>+</button>
                    </div>
                  </div>
                ):null
            }

            {
                (cartItems[1].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-xx99-mark-two-headphones/mobile/mk1.png" alt="XX99 MK 1 headphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">XX99 MK I</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[1].price * xx99mk1Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (xx99mk1Quantity > 0) {
                                                setXx99mk1Quantity(xx99mk1Quantity - 1)
                                              } else{
                                                setXx99mk1Quantity(0);
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx99mk1Quantity}</p>
                      <button onClick={() => setXx99mk1Quantity(xx99mk1Quantity + 1)}>+</button>
                    </div>
                  </div>
                ):null
            }

            {
                (cartItems[2].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-xx99-mark-two-headphones/mobile/xx59.png" alt="XX59 headphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">XX59</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[2].price * xx59Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (xx59Quantity > 0) {
                                                setXx59Quantity(xx59Quantity - 1)
                                              } else{
                                                setXx59Quantity(0);
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx59Quantity}</p>
                      <button onClick={() => setXx59Quantity(xx59Quantity + 1)}>+</button>
                    </div>
                  </div>
                ):null
            }

            {
                (cartItems[3].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-zx9-speaker/mobile/zx9.png" alt="ZX9 Speakers"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">ZX9</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[3].price * zx9Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (zx9Quantity > 0) {
                                                setZx9Quantity(zx9Quantity - 1)
                                              } else{
                                                setZx9Quantity(0);
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{zx9Quantity}</p>
                      <button onClick={() => setZx9Quantity(zx9Quantity + 1)}>+</button>
                    </div>
                  </div>
                ):null
            }
            
            {
                (cartItems[4].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-zx7-speaker/mobile/zx7.png" alt="ZX9 Speakers"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">ZX7</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[4].price * zx7Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (zx7Quantity > 0) {
                                                setZx7Quantity(zx9Quantity - 1)
                                              } else{
                                                setZx7Quantity(0);
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{zx7Quantity}</p>
                      <button onClick={() => setZx7Quantity(zx7Quantity + 1)}>+</button>
                    </div>
                  </div>
                ):null
            }
            
            {
                (cartItems[5].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-yx1-earphones/mobile/yx1.png" alt="YX1 Earphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">YX1</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[5].price * yx1Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (yx1Quantity > 0) {
                                                setYx1Quantity(yx1Quantity - 1)
                                              } else{
                                                setYx1Quantity(0);
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{yx1Quantity}</p>
                      <button onClick={() => setYx1Quantity(yx1Quantity + 1)}>+</button>
                    </div>
                  </div>
                ):null
            }
            </div>

            ) : (
              // Render a loading message or a placeholder here
              <p>Loading...</p>
            )
          }

          <div className="checkOutBox__total-text-box">
            <p className="checkOutBox__total-text-box-total">TOTAL</p>
            <p className="checkOutBox__total-text-box-price">${total.toLocaleString()}</p>
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