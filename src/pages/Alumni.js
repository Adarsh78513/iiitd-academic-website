import React from 'react'
import '../styles/Student.css'

const Alumni = () => {
    return (
        <div className='page'>
            <div className="heading">Alumni</div>
            <div className="rows">

                <div className="section">
                    <div className="subHeading"><u>Issue of Various Certificates</u></div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Final%20Document%20for%20Issue%20of%20Various%20Certificates.pdf">Transcript, Duplicate Degree, Other Certificates</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>Connect with Alumni Network</u></div>
                    <a className="projectLinks" href="https://alumni.iiitd.ac.in/">Alumni website</a>
                    <a className="projectLinks" href="https://iiitdelhi.almaconnect.com/">Join Alumni Community</a>
                    <a className="projectLinks" href="https://www.iiitd.ac.in/sites/default/files/alumnifaq.html">FAQs</a>
                </div>
            </div>

            <div className="rows">

                <div className="section">
                    <div className="subHeading"><u>Mentoring IIIT-D's Students</u></div>
                    <a className="projectLinks" href="https://awards.iiitd.edu.in/">SMP Website</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>Share Experience of Academics@IIIT-Delhi</u></div>
                    <a className="projectLinks" href="https://www.iiitd.ac.in/shareacademicexperiences/">Share Your Experiennce</a>
                </div>

            </div>
        </div>
    )
}

export default Alumni