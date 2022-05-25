import React from 'react'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdCarousel from '../components/AdCarousel'

const Convocation = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <AdCarousel />
            <div className="heading">Convocation</div>
            <Footer />
        </div>
    )
}

export default Convocation