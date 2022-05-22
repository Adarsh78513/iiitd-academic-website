import React from 'react'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import AdCarousel from '../components/AdCarousel'
import '../styles/contact.css'

const Contact = () => {
    return (
        <div className="contactContainer">
            <Marquee />
            <Navbar />
            <AdCarousel />
            <div className='contact'>
                <div className='contactForm'>
                    Enquire Us
                    <form action="">

                    </form>
                </div>
                <div className='contactInfo'>
                    <div>Location</div>
                    <div>Contact Info</div>
                    <div>Mail Info</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact