import React from 'react'
import ControlledCarousel from '../components/Carousel'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import '../styles/home.css'

const Home = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <ControlledCarousel />
            <div className="aboutUsContainer">
                <div className="aboutUs">
                    <div className='heading'>About IIITD</div>
                    <p className='para'>
                        IIIT-Delhi is a research-led institute with thriving degree programs at the UG & PG levels.
                        The Academics celebrate the culture of learning by doing. The approach is always to encourage analytical precision with curiosity, playful imagination and searching for ways to solve real life problems in service to the society.
                        The vision is to be socially relevant, industry facing, and globally connected.
                    </p>
                </div>
                <div>
                    <img width='700vw' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Iiitdelhi-building.jpg/501px-Iiitdelhi-building.jpg" alt="" />
                </div>
            </div>
            <div>

            </div>
            <Footer />
        </div>
    )
}

export default Home