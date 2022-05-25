import React from 'react'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/academicTeam.css'

const AcademicTeam = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <div className="heading">Academic Team</div>
            <hr></hr>
            <div className="dean">

            </div>
            <div className="adminAcademic">

            </div>
            <div className="adminBTech">

            </div>
            <div className="adminMTech">

            </div>
            <div className="adminPhD">

            </div>
            <div className="adminInternal">

            </div>
            <div className="support">

            </div>
            <Footer />
        </div>
    )
}

export default AcademicTeam