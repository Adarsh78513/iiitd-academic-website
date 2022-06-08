import React, { Component } from 'react'
import '../styles/home.css'
import Home from './Home'
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';



export default class Index extends Component {
    render() {
        return (
            <ParallaxProvider>
                <Home />
            </ParallaxProvider>
        );
    }
}
