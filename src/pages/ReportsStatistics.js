import React from 'react'
import '../styles/Student.css'
import { ParallaxBanner } from 'react-scroll-parallax';

const ReportsStatistics = () => {
    return (
        <div className='page'>
            <ParallaxBanner
                style={{ height: '105vh' }}
                layers={[
                    {
                        image:
                            './IIITD_building.jpg',
                        speed: -30,
                    },
                ]}
            >
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
                        <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/EOA_Report_2020-21.pdf">AICTE</a>
                        <div className="projectLinks">NBA</div>
                        <ul>
                            <li>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/18-01-2018_NBA_CSE_PG.pdf">CSE-PG</a>
                            </li>
                            <li>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/30.09.2021_NBA_CSE_UG.pdf">CGE-UG</a>
                            </li>
                            <li>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/31-01-2020_NBA_ECE_UG.pdf">ECE-UG</a>
                            </li>
                        </ul>
                        <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/NAAC%20Letter%202015.pdf">NAAC</a>

                    </div>

                </div>
            </ParallaxBanner>
        </div>
    )
}

export default ReportsStatistics