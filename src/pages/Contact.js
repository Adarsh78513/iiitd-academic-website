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
            <div className="heading">Contact Academic Department</div>
            <hr />
            <div className='contact'>
                <div className='contactForm'>
                    <div className='sub'>Enquire Us</div>
                    <form className="form" onSubmit="">
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                        <input type="text" name="email" id="email" placeholder="Enter Your Email" />
                        <input type="text" name="subject" id="subject" placeholder='Enter Subject' />
                        <textarea className='query'>

                        </textarea>
                        <button className='submit'>SEND</button>
                    </form>
                </div>
                <div className='contactInfo'>
                    <div className='sub'>Location</div>
                    <div className="content">Academic Building, 2nd Floor
                        Indraprastha Institute of Information Technology,
                        Okhla Phase -III, New Delhi - 110020</div>
                    <div className='sub'>Contact Info</div>
                    <div className="content">011-26907 400</div>
                    <div className='sub'>Mail Info</div>
                    <div className="content">admin-academics@iiitd.ac.in</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact