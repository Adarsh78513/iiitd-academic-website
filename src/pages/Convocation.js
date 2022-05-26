import React from 'react'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdCarousel from '../components/AdCarousel'
import '../styles/convocation.css'

const Convocation = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <AdCarousel />
            <div className="heading">Convocation</div>
            <div className="convocation">
                <div className="convoCont">
                    Recently Held 10th Convocation
                    <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3927.jpg" alt="" />
                </div>
                <div className="convoCont">
                    Previous Convocations
                    <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3511.jpg" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Convocation