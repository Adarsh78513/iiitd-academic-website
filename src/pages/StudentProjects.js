import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Student.css'
import { Parallax } from 'react-scroll-parallax';

const StudentProjects = () => {
    return (
        <div className='page'>
            {/* make divs to show the projects of all differetn sections in the website */}

            <div className="heading" style={{ margin: '3vh' }}>Student Projects</div>
            <div className="rows">
                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateY={[
                        '60%',
                        '-70%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">Ph.D. Thesis</div>
                        <a className="projectLinks" href="https://repository.iiitd.edu.in/xmlui/handle/123456789/716">Awarded Ph.D Thesis</a>
                    </div>
                </Parallax>


                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateY={[
                        '30%',
                        '-30%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">M.Tech. Thesis</div>
                        <a className="projectLinks" href="https://awards.iiitd.edu.in/">Awarded M.Tech. Thesis</a>
                        <a className="projectLinks" href="https://academics.iiitd.edu.in/mtechthesis.html">All Thesis Repository</a>
                    </div>
                </Parallax>

                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateY={[
                        '-10%',
                        '10%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">B.Tech. Project</div>
                        <a className="projectLinks" href="https://awards.iiitd.edu.in/">Awarded B.Tech. Project (BTP)</a>
                        <a className="projectLinks" href="https://iiitd.ac.in/academics/btps">All B.Tech. Rroject</a>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default StudentProjects