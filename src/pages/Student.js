import React, { useState, useEffect } from 'react'
import '../styles/Student.css'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

const Student = ({ setBeforeArrive, setAcademicTeam, setFAQ }) => {

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
        <div className='page' style={{ backgroundImage: '/IIITD_building.jpg' }}>
            <ParallaxBanner
                style={{ height: size > 930 ? '650px' : size > 690 ? '500px' : size > 500 ? '1000px' : '750px' }}
                layers={[
                    {
                        image:
                            './IIITD_building.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className={size > 820 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>Students</div>
                <div className={size > 690 ? "rows" : "smallRow"}>

                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '40%',
                            '-20%'
                        ]}
                        opacity={[
                            0,
                            2
                        ]}
                    >
                        <div className={size > 930 ? 'student' : size > 500 ? 'smallStudent' : 'vSmallStudent'}>
                            <div className="section">
                                <div className="subHeading">Incoming Students</div>
                                <a className="projectLinks" onClick={() => { setAcademicTeam(true) }} style={{ cursor: 'pointer' }}>Primary Contact</a>
                                <a className="projectLinks" onClick={() => { setBeforeArrive(true) }} style={{ cursor: 'pointer' }}>Before you arrive</a>
                                <a className="projectLinks" href="http://online.fliphtml5.com/npkwf/zpfc/#p=1">Student Handbook</a>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '-5%',
                            '5%'
                        ]}
                        opacity={[
                            0,
                            2
                        ]}

                    >
                        <div className={size > 930 ? 'student' : size > 500 ? 'smallStudent' : 'vSmallStudent'}>
                            <div className="section">
                                <div className="subHeading">Academic Matters</div>
                                <a className="projectLinks" href="https://iiitd.ac.in/academics/resources">Regulations</a>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Teaching%20and%20Evaluation.pdf">Examination & Assessment</a>
                                <a className="projectLinks" href="https://iiitd.ac.in/life/discipline-grievance/disciplinary-action">Student Conduct</a>
                                <a className="projectLinks" href="hhttps://iiitd.ac.in/academics/issue-resolution">Complaints & acad Appeals</a>
                                <a className="projectLinks" href="https://iiitd.ac.in/form_docs">Forms</a>
                                <a className="projectLinks" href="https://iiitd.ac.in/academics/resources/acad-dishonesty">Academic Dishonesty</a>
                            </div>
                        </div>
                    </Parallax >

                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '-40%',
                            '15%'
                        ]}
                        opacity={[
                            0,
                            2
                        ]}
                    >
                        <div className={size > 930 ? 'student' : size > 500 ? 'smallStudent' : 'vSmallStudent'}>
                            <div className="section">
                                <div className="subHeading">Fees & Funding </div>
                                <a className="projectLinks" href="https://iiitd.ac.in/admission/fees">Course Fee</a>
                                <a className="projectLinks" href="https://iiitd.ac.in/admission/scholarships">Scholarships (UG & PG)</a>
                                <a className="projectLinks" href="https://awards.iiitd.edu.in/">Prizes & Awards</a>
                                <a className="projectLinks" href="https://payments.iiitd.edu.in/pg/studentsfee/">Fee Portal</a>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Travel%20Assistance%20to%20BTech%20and%20MTech%20Students.pdf">Travel Assistance</a>
                            </div>
                        </div>
                    </Parallax >
                </div >

                <div className={size > 690 ? "rows" : "smallRow"}>
                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '20%',
                            '-20%'
                        ]}
                        opacity={[
                            0,
                            2
                        ]}
                    >
                        <div className={size > 930 ? 'student' : size > 500 ? 'smallStudent' : 'vSmallStudent'}>
                            <div className="section">
                                <div className="subHeading">Graduation Requirement & Leaving IIIT-D</div>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Graduation%20Requirements%20and%20Award%20of%20Degree.pdf">Graduation Requirement</a>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Issue%20of%20Transcript%20&%20Degree.pdf">Accademic Transcript & Degree</a>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Leaving%20IIIT-D.pdf">Preparing to leave</a>
                            </div>
                        </div>
                    </Parallax >


                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '0%',
                            '-0%'
                        ]}
                        opacity={[
                            0,
                            2
                        ]}
                    >
                        <div className={size > 930 ? 'student' : size > 500 ? 'smallStudent' : 'vSmallStudent'}>
                            <div className="section">
                                <div className="subHeading">Higher studies at IIITD</div>
                                <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2021/2021%20January-%20Dual%20Degree%20Regulations_Final.pdf">Dual Degree(B.Tech. & M.Tech.)</a>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitdstudents.html#">B.Tech. to Ph.D.</a>
                                <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/MTech%20to%20PhD.pdf">M.Tech. to Ph.D.</a>
                            </div>
                        </div>
                    </Parallax >



                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '-20%',
                            '15%'
                        ]}
                        opacity={[
                            0,
                            2
                        ]}
                    >
                        <div className={size > 930 ? 'student' : size > 500 ? 'smallStudent' : 'vSmallStudent'}>
                            <div className="section">
                                <div className="subHeading">FAQ</div>
                                <a className="projectLinks" style={{ cursor: 'pointer' }} onClick={() => { setFAQ(true) }}>Ph.D.</a>
                                <a className="projectLinks" style={{ cursor: 'pointer' }} onClick={() => { setFAQ(true) }}>M.Tech.</a>
                                <a className="projectLinks" style={{ cursor: 'pointer' }} onClick={() => { setFAQ(true) }}>B.Tech.</a>
                            </div>
                        </div>
                    </Parallax >
                </div >
            </ParallaxBanner >
        </div >
    )
}

export default Student