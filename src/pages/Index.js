import React, { Component, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import Home from './Home'
import { ParallaxProvider, Parallax, ParallaxBanner  } from 'react-scroll-parallax';



export default class Index extends Component  {
    render(){
        return (
            <ParallaxProvider>
                <Home />
            </ParallaxProvider>
        );
    }
}
