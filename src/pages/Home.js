import React from 'react'
import ControlledCarousel from '../components/Carousel'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <ControlledCarousel />
            Home
        </div>
    )
}

export default Home