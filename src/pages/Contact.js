import React from 'react'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import '../styles/contact.css'

const Contact = () => {
    return (
        <div className="contactContainer">
            <Marquee />
            <Navbar />
            <Carousel />
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