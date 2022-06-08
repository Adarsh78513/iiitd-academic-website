import React from 'react'
import '../styles/Student.css'

const ReportsStatistics = () => {
    return (
        <div className='page'>
            <div className="heading">Report & Statistics</div>
            <div className="rows">

                <div className="section">
                    <div className="subHeading">Admission Report</div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/PhD%20admission%20report%20September%202021.pdf">Ph.D</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/M.Tech%20Admission%20Report%202021.pdf">M.Tech</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/BTech%20Admission%20Report%202021.pdf">B.Tech</a>

                </div>

                <div className="section">
                    <div className="subHeading">Semester Summary Report</div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitd-reports-statistics.html#">Winter 2022</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitd-reports-statistics.html#">Monsoon 2021</a>
                </div>
            </div>

            <div className="rows">

                <div className="section">
                    <div className="subHeading">Ranking Report</div>
                    <a className="projectLinks" href="https://iiitd.ac.in/nirf">NIRF</a>
                    <a className="projectLinks" href="https://iiitd.ac.in/ariia">ARIIA</a>
                    <a className="projectLinks" href="https://iiitd.ac.in/rankings">Others</a>
                </div>

                <div className="section">
                    <div className="subHeading">Accrediation & Affiliation Report</div>
                    <a className="projectLinks" href="https://www.iiitd.ac.in/shareacademicexperiences/">Share Your Experiennce</a>
                </div>

            </div>
        </div>
    )
}

export default ReportsStatistics