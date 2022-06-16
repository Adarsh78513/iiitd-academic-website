import React, { useState, useEffect } from 'react'
import '../styles/alumni.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from 'react-router-dom'

const Alumni = ({ certificate, setCertificate }) => {
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
                style={{ height: size > 800 ? '550px' : size > 600 ? '450px' : '400px' }}
                layers={[
                    {
                        image:
                            './IIITD_night.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className={size > 820 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>Alumni</div>
                <div className={size > 820 ? 'alumni' : size > 600 ? 'smallAlumni' : 'vSmallAlumni'}>
                    <div className="rows">

                        <div className="section">
                            <div className="subHeading">Issue of Various Certificates</div>
                            <a className="projectLinks" style={{ cursor: 'pointer' }} onClick={() => { setCertificate(true) }}>Transcript, Duplicate Degree, Other Certificates</a>
                        </div>

                        <div className="section">
                            <div className="subHeading">Alumni Networking</div>
                            <a className="projectLinks" href="https://alumni.iiitd.ac.in/">Alumni website</a>
                            <a className="projectLinks" href="https://iiitdelhi.almaconnect.com/">Join Alumni Community</a>
                            <a className="projectLinks" href="https://www.iiitd.ac.in/sites/default/files/alumnifaq.html">FAQs</a>
                        </div>
                    </div >

                    <div className="rows">

                        <div className="section">
                            <div className="subHeading">Mentoring Students</div>
                            <a className="projectLinks" href="https://awards.iiitd.edu.in/">SMP Website</a>
                        </div>

                        <div className="section">
                            <div className="subHeading">Academic Experience</div>
                            <a className="projectLinks" href="https://www.iiitd.ac.in/shareacademicexperiences/">Share Your Experiennce</a>
                        </div>

                    </div>
                </div>
            </ParallaxBanner >
        </div >
    )
}

export default Alumni