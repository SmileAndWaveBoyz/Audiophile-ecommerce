import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import NavBar from "../components/Navbar"
import Links from '../components/Links';
import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function Earphones() {
    return ( 
        <>
            <header>
            <div className="line"></div>
                <div className="headphones__hero">
                    <h1>EARPHONES</h1>
                </div>
            </header>
            <main>
                <div className="blockContainer">

                    <div className="showBlock">
                        <div className="showBlock__image-container">
                            <img className='showBlock__image-container-yx1' src="./assets/product-yx1-earphones/mobile/yx1.png" alt="YX1 Earphones" />
                        </div>

                        <div className="showBlock__text-container">
                            <p className='showBlock__text-container-title'>NEW PRODUCT</p>
                            <h2 className='showBlock__text-container-heading'>YX1 WIRELESS EARPHONES</h2>
                            <p className='showBlock__text-container-paragraph'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                            <Link className='showBlock__text-container-button'>SEE PRODUCT</Link>
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

export default Earphones;