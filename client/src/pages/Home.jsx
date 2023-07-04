import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import NavBar from "../components/Navbar"
import Links from '../components/Links';
import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function Home() {
    return ( 
        <>
            <header>
            <div className="line"></div>
                <div className="homeBlock">
                    <h2>NEW PRODUCT</h2>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link className='homeBlock__product-button' to="/">SEE PRODUCT</Link>
                </div>
            </header>
            <main>
            <Links/>

            <div className="zx9Block">
                <img className='zx9Block__speaker-image' src="./assets/home/mobile/image-speaker-zx9.png" alt="ZX9 Speaker" />
                <svg className='zx9Block__ringSVG1' viewBox="0 0 279 279" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="139.5" cy="139.5" r="139" stroke="white"/></svg>
                <svg className='zx9Block__ringSVG2' viewBox="0 0 320 318" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="160" cy="158" r="159.5" stroke="white"/></svg>
                <svg className='zx9Block__ringSVG3' viewBox="0 0 700 300" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="345" cy="184" r="300" stroke="white"/></svg>

                <div className="zx9Block__text-box">
                <h3>ZX9 SPEAKER</h3>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link className='zx9Block__button' to="/">SEE PRODUCT</Link>
                </div>
            </div>

            <div className="zx9SpeakerBlock">
                <div className="zx9SpeakerBlock__text-block">
                <h3>ZX9 SPEAKER</h3>
                <Link to="/">SEE PRODUCT</Link>
                </div>
                <img src="./assets/home/mobile/image-speaker-zx7.png" alt="ZX9 Speaker on table" />
            </div>

            <div className="YX1Block">
                <img src="./assets/home/mobile/image-earphones-yx1.png" alt="" />
                <div className="YX1Block__text-box">
                <h3>YX1 EARPHONES</h3>
                <Link>SEE PRODUCT</Link>
                </div>
            </div>

            <Gear/>

            </main>

            <Footer/>
        </>
     );
}

export default Home;