import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Student.css'

const StudentProjects = () => {
    return (
        <div className='page'>
            {/* make divs to show the projects of all differetn sections in the website */}
            <div className="heading">Student Projects</div>
            <div className="rows">

                <div className="section">
                    <div className="subHeading"><u>Ph.D. Thesis</u></div>
                    <a className="projectLinks" href="https://repository.iiitd.edu.in/xmlui/handle/123456789/716">Awarded Ph.D Thesis</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>M.Tech. Thesis</u></div>
                    <a className="projectLinks" href="https://awards.iiitd.edu.in/">Awarded M.Tech. Thesis</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/mtechthesis.html">All Thesis Repository</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>B.Tech. Project</u></div>
                    <a className="projectLinks" href="https://awards.iiitd.edu.in/">Awarded B.Tech. Project (BTP)</a>
                    <a className="projectLinks" href="https://iiitd.ac.in/academics/btps">All B.Tech. Rroject</a>
                </div>

            </div>
        </div>
    )
}

export default StudentProjects