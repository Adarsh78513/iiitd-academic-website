import React, { useState, useEffect } from 'react'
import '../styles/Student.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-router-dom'

const Alumni = () => {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowDimensions)
        console.log(size);
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [window.innerWidth])
    return (
        <div className='page'>
            <ParallaxBanner
                style={{ height: '100vh' }}
                layers={[
                    {
                        image:
                            './IIITD_night.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'} style={{ margin: "3vh" }}>Alumni</div>
                <div className="rows">

                    <div className="section">
                        <div className="subHeading">Issue of Various Certificates</div>
                        <a className="projectLinks" href="/certificates">Transcript, Duplicate Degree, Other Certificates</a>
                    </div>

                    <div className="section">
                        <div className="subHeading">Connect with Alumni Network</div>
                        <a className="projectLinks" href="https://alumni.iiitd.ac.in/">Alumni website</a>
                        <a className="projectLinks" href="https://iiitdelhi.almaconnect.com/">Join Alumni Community</a>
                        <a className="projectLinks" href="https://www.iiitd.ac.in/sites/default/files/alumnifaq.html">FAQs</a>
                    </div>
                </div>

                <div className="rows">

                    <div className="section">
                        <div className="subHeading">Mentoring IIIT-D's Students</div>
                        <a className="projectLinks" href="https://awards.iiitd.edu.in/">SMP Website</a>
                    </div>

                    <div className="section">
                        <div className="subHeading">Share Experience of Academics@IIIT-Delhi</div>
                        <a className="projectLinks" href="https://www.iiitd.ac.in/shareacademicexperiences/">Share Your Experiennce</a>
                    </div>

                </div>
            </ParallaxBanner>
        </div>
    )
}

export default Alumni