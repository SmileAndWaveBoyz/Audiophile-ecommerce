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
import { useSelector, useDispatch } from "react-redux";
import {
  setXx99MiiQuantity,
  setXx99MiQuantity,
  setXx59Quantity,
  setZx9Quantity,
  setZx7Quantity,
  setYx1Quantity,
  selectXx99MiiQuantity,
  selectXx99MiQuantity,
  selectXx59Quantity,
  selectZx9Quantity,
  selectZx7Quantity,
  selectYx1Quantity,
} from "./pages/reduxItems";

function App() {
  const [cartDisplayBox, setCartDisplayBox] = useState("none");
  const [cartDisplayFadeOpacity, setCartDisplayFadeOpacity] = useState(0);
  const [cartDisplayFadeZindex, setCartDisplayFadeZindex] = useState(-1);
  
  const [cartItems, setCartItems] = useState([]);

  function refreshCart() { // This pulls the cart items from the backend and puts them in cartItems
      fetch('/api/cart')
        .then((response) => response.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error('Error fetching cart items:', error));   
  }

  useEffect(() => {
    refreshCart();
  }, []);

  useEffect(() => { // This populates new variables from cartItems into front end redux variables 
    if(cartItems.length > 0){ 
      dispatch(setXx99MiiQuantity(cartItems[0].quantity))
      dispatch(setXx99MiQuantity(cartItems[1].quantity))
      dispatch(setXx59Quantity(cartItems[2].quantity))
      dispatch(setZx9Quantity(cartItems[3].quantity))
      dispatch(setZx7Quantity(cartItems[4].quantity))
      dispatch(setYx1Quantity(cartItems[5].quantity))

      setTotal((cartItems[0].quantity * cartItems[0].price) + (cartItems[1].quantity * cartItems[1].price) + (cartItems[2].quantity * cartItems[2].price) + (cartItems[3].quantity * cartItems[3].price) + (cartItems[4].quantity * cartItems[4].price) + (cartItems[5].quantity * cartItems[5].price));
    }
  }, [cartItems]);

  function cartClick() { // This makes the cart appear / disappear when clicked, it also pulls the cart data from the back end with refreshCart. 
    if (cartDisplayBox === "none") {
      setCartDisplayBox("block")
      setCartDisplayFadeOpacity(0.5)
      setCartDisplayFadeZindex(1)
    } else{
      setCartDisplayBox("none")
      setCartDisplayFadeOpacity(0.0)
      setCartDisplayFadeZindex(-1)
      updateBackEnd()
    }

    refreshCart();    
  }

  //This popluates new front end variables from Redux
  const dispatch = useDispatch();
  const xx99mk2Quantity = useSelector(selectXx99MiiQuantity)
  const xx99mk1Quantity = useSelector(selectXx99MiQuantity)
  const xx59Quantity = useSelector(selectXx59Quantity)
  const zx9Quantity = useSelector(selectZx9Quantity)
  const zx7Quantity = useSelector(selectZx7Quantity)
  const yx1Quantity = useSelector(selectYx1Quantity)


  function updateBackEnd() { // This will update the backend with the front end quantity of all variables
    let itemNameToUpdate = ["XX99 MARK II Headphones", "XX99 MARK I Headphones", "XX59 Headphones", "ZX9 Speaker", "ZX7 Speaker", "YX1 Wireless Earphones"];
    let itemQuantityArray = [xx99mk2Quantity, xx99mk1Quantity, xx59Quantity, zx9Quantity, zx7Quantity, yx1Quantity]

    for (let i = 0; i < itemQuantityArray.length; i++) {
      let newQuantity = itemQuantityArray[i];
      axios
        .put(`/api/cart/${itemNameToUpdate[i]}`, { newQuantity })
        .then((response) => {
          console.log('Item quantity updated successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error updating item quantity:', error);
        });
    }


  }


  const navigate = useNavigate();

  const[total, setTotal] = useState(0);

  useEffect(() => { // This just re-calculates the total price every time a front end item quantity changes
    if(cartItems.length > 0){
    setTotal((xx99mk2Quantity * cartItems[0].price) + (xx99mk1Quantity * cartItems[1].price) + (xx59Quantity * cartItems[2].price) + (zx9Quantity * cartItems[3].price) + (zx7Quantity * cartItems[4].price) + (yx1Quantity * cartItems[5].price));
    }
  }, [xx99mk2Quantity, xx99mk1Quantity, xx59Quantity, zx9Quantity, zx7Quantity, yx1Quantity]);

  function removeAllItems() {
    dispatch(setXx99MiiQuantity(0))
    dispatch(setXx99MiQuantity(0))
    dispatch(setXx59Quantity(0))
    dispatch(setZx9Quantity(0))
    dispatch(setZx7Quantity(0))
    dispatch(setYx1Quantity(0))
  }

  return (
    <>
        <NavBar onCartClick={cartClick}/>
        <div className="fadeDiv" style={{opacity: cartDisplayFadeOpacity, zIndex: cartDisplayFadeZindex}}></div>
        <div className="checkOutBox" style={{display: cartDisplayBox}}>
          <div className="checkOutBox__heading-box">
            <h2 className="checkOutBox__heading-box-heading">CART ({xx99mk2Quantity + xx99mk1Quantity + xx59Quantity + zx9Quantity + zx7Quantity + yx1Quantity})</h2>
            <button className="checkOutBox__heading-box-remove-button" onClick={removeAllItems}>Remove all</button>
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
                                                dispatch(setXx99MiiQuantity(xx99mk2Quantity - 1))
                                              } else{
                                                dispatch(setXx99MiiQuantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx99mk2Quantity}</p>
                      <button onClick={() => dispatch(setXx99MiiQuantity(xx99mk2Quantity + 1))}>+</button>
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
                                                dispatch(setXx99MiQuantity(xx99mk1Quantity - 1))
                                              } else{
                                                dispatch(setXx99MiQuantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx99mk1Quantity}</p>
                      <button onClick={() => dispatch(setXx99MiQuantity(xx99mk1Quantity + 1))}>+</button>
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
                                                dispatch(setXx59Quantity(xx59Quantity - 1))
                                              } else{
                                                dispatch(setXx59Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx59Quantity}</p>
                      <button onClick={() => dispatch(setXx59Quantity(xx59Quantity + 1))}>+</button>
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
                                                dispatch(setZx9Quantity(zx9Quantity - 1))
                                              } else{
                                                dispatch(setZx9Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{zx9Quantity}</p>
                      <button onClick={() => dispatch(setZx9Quantity(zx9Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }
            
            {
                (cartItems[4].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-zx7-speaker/mobile/zx7.png" alt="ZX7 Speakers"/>
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
                                                dispatch(setZx7Quantity(zx7Quantity - 1))
                                              } else{
                                                dispatch(setZx7Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{zx7Quantity}</p>
                      <button onClick={() => dispatch(setZx7Quantity(zx7Quantity + 1))}>+</button>
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
                                                dispatch(setYx1Quantity(yx1Quantity - 1))
                                              } else{
                                                dispatch(setYx1Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{yx1Quantity}</p>
                      <button onClick={() => dispatch(setYx1Quantity(yx1Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }
            </div>

            ) : (
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

          <Route path='/checkout' element={<Checkout key={0} cartItemsAll = {cartItems} total={total}/>}/>  
        </Routes>



    </>
  )
}

export default App