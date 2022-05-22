import React from 'react'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

import { link } from 'react-router-dom'
import '../styles/Student.css'

const StudentProjects = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            {/* make divs to show the projects of all differetn sections in the website */}
            <div className="rows">

                <div className="section">
                    <div className="subHeading"><u>Ph.D. Thesis</u></div>
                        <a className = "projectLinks" href="https://repository.iiitd.edu.in/xmlui/handle/123456789/716">Awarded Ph.D Thesis</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>M.Tech. Thesis</u></div>
                        <a className = "projectLinks" href="https://awards.iiitd.edu.in/">Awarded M.Tech. Thesis</a>
                        <a className = "projectLinks" href="https://academics.iiitd.edu.in/mtechthesis.html">All Thesis Repository</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>B.Tech. Project</u></div>
                        <a className = "projectLinks" href="https://awards.iiitd.edu.in/">Awarded B.Tech. Project (BTP)</a>
                        <a className = "projectLinks" href="https://iiitd.ac.in/academics/btps">All B.Tech. Rroject</a>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default StudentProjects