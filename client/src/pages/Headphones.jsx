import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import NavBar from "../components/Navbar"
import Links from '../components/Links';
import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function Headphones() {
    return ( 
        <>
            <header>
            <div className="line"></div>
                <div className="headphones__hero">
                    <h1>HEADPHONES</h1>
                </div>
            </header>
            <main>
                <div className="blockContainer">
                    <div className="xx99Block">
                        <div className="xx99Block__image-container">
                            <img src="./assets/product-xx99-mark-two-headphones/mobile/image-removebg-preview(47).png" alt="XX99 Mark II Headphones" />
                        </div>

                        <div className="xx99Block__text-container">
                            <p className='xx99Block__text-container-title'>NEW PRODUCT</p>
                            <h2 className='xx99Block__text-container-heading'>XX99 Mark II Headphones</h2>
                            <p className='xx99Block__text-container-paragraph'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <Link className='xx99Block__text-container-button'>SEE PRODUCT</Link>
                        </div>
                    </div>
                    <div className="xx99Block">
                        <div className="xx99Block__image-container">
                            <img src="./assets/product-xx99-mark-two-headphones/mobile/image-removebg-preview(47).png" alt="XX99 Mark II Headphones" />
                        </div>

                        <div className="xx99Block__text-container">
                            <p className='xx99Block__text-container-title'>NEW PRODUCT</p>
                            <h2 className='xx99Block__text-container-heading'>XX99 Mark II Headphones</h2>
                            <p className='xx99Block__text-container-paragraph'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <Link className='xx99Block__text-container-button'>SEE PRODUCT</Link>
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

export default Headphones;