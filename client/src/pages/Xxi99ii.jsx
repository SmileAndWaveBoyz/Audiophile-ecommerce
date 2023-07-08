import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import NavBar from "../components/Navbar"
import Links from '../components/Links';
import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function Xx99ii() {
    return ( 
        <>
            <main>
                <div className="xx99miiPage-blockContainer">
                    <Link className='goBackLink' to="/headphones">Go Back</Link>

                    <div className="xx99miiPage">
                            <div className="xx99miiPage__image-box">
                                <img src="../assets/product-xx99-mark-two-headphones/mobile/image-removebg-preview(47).png" alt="XX99 Mark 2 Headphones" />
                            </div>
                        

                        <div className="xx99miiPage-top-text-container"> 
                            <h3 className='xx99miiPage__new-heading'>NEW PRODUCT</h3>
                            <h1 className='xx99miiPage__heading'>XX99 Mark II Headphones</h1>
                            <p className='xx99miiPage__paragraph'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <p className='xx99miiPage__price'>$ 2,999</p>
                            <div className="xx99miiPage__buttons">
                                <div className="xx99miipage__quantity-buttons">
                                    <button className='xx99miipage__quantity-buttons-one'>-</button>
                                    <p className='xx99miipage__quantity-buttons-number'>1</p>
                                    <button className='xx99miipage__quantity-buttons-two'>+</button>
                                </div>
                                <button className='xx99miipage__cart-button'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <h3 className='xx99miipage__feature-heading'>FEATURES</h3>
                    <p className='xx99miipage__description'>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                    
                    <div className="xx99miipage__box-block">
                        <h3 className='xx99miipage__feature-heading'>in the box</h3>
                        <div className="xx99miipage__list-container">
                            <p className='xx99miipage__list-container-item'><strong>1x</strong> Headphone Unit</p> 
                            <p className='xx99miipage__list-container-item'><strong>2x</strong> Replacement Earcups</p>
                            <p className='xx99miipage__list-container-item'><strong>1x</strong> User manual</p>
                            <p className='xx99miipage__list-container-item'><strong>1x</strong> 3.5mm 5m Audio Cable</p>
                            <p className='xx99miipage__list-container-item'><strong>1x</strong> Travel Bag</p>
                        </div>
                    </div>

                    <div className="xx99miiPage-blockContainer-image-box">
                        <div className="xx99miiPage-blockContainer-image-box-small-images">
                            <img className='xx99miiPage-image-headphone-guy' src="./assets/product-xx99-mark-two-headphones/mobile/1.png" alt="A man relaxing with headphones" />
                            <img className='xx99miiPage-image-table' src="./assets/product-xx99-mark-two-headphones/mobile/2.png" alt="A table with headphones and a phone on it" />
                        </div>
                        <img className='xx99miiPage-image-headphone-close' src="./assets/product-xx99-mark-two-headphones/mobile/3.png" alt="A close up of the XX99 Mark II Headphones" />
                    </div>

                    
                    <div className="recomendation__block">
                        <h3 className='recomendation__block-heading'>YOU MAY ALSO LIKE</h3>
                        <div className="recomendation__block-flex-box">
                            <div className="recomendation__block-container">
                                <div className="recomendation__block-container-image-box">
                                    <img className='recomendation__block-container-image-box-image xx99mi' src="./assets/product-xx99-mark-two-headphones/mobile/mk1.png" alt="XX99 Mark I Headphones" />
                                </div>

                                <h3 className='recomendation__block-product-heading'>XX99 MARK I</h3>
                                <Link to={"/headphones/xx99mi"} className="seeProductButton">SEE PRODUCT</Link>
                            </div>

                            <div className="recomendation__block-container">
                                <div className="recomendation__block-container-image-box">
                                    <img className='recomendation__block-container-image-box-image xx59' src="./assets/product-xx99-mark-two-headphones/mobile/xx59.png" alt="XX99 Mark I Headphones" />                                
                                </div>

                                <h3 className='recomendation__block-product-heading'>XX59</h3>
                                <Link to={"/headphones/xx59"} className="seeProductButton">SEE PRODUCT</Link>
                            </div>

                            <div className="recomendation__block-container">
                                    <div className="recomendation__block-container-image-box">
                                        <img className='recomendation__block-container-image-box-image zx9' src="./assets/product-zx9-speaker/mobile/zx9.png" alt="XX99 Mark I Headphones" />                                
                                    </div>
                                <h3 className='recomendation__block-product-heading'>ZX9 SPEAKER</h3>
                                <Link to={"/speakers/zx9"} className="seeProductButton">SEE PRODUCT</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>   

                <Links/>
                <Gear/>
            </main>

            <Footer/>
        </>
     );
}

export default Xx99ii;