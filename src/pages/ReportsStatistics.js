import React from 'react'
import AdCarousel from '../components/AdCarousel'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'

const ReportsStatistics = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <AdCarousel />
            <div className="heading">Reports & Statistics</div>
            <Footer />
        </div>
    )
}

export default ReportsStatistics