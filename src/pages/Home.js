import React from 'react'
import ControlledCarousel from '../components/Carousel'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <ControlledCarousel />
            Home
            <Footer />
        </div>
    )
}

export default Home