import React from 'react'
import '../styles/Student.css'
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';

const Student = () => {
    return (
        <div className='page' style={{ backgroundImage: '/IIITD_building.jpg' }}>
            <ParallaxBanner
                style={{ height: '100vh' }}
                layers={[
                    {
                        image:
                            './IIITD_building.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className="heading">Students</div>
                <div className="rows">

                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '40%',
                            '-20%'
                        ]}
                        opacity={[
                            0,
                            1.5
                        ]}
                    >
                        <div className="section">
                            <div className="subHeading">New Students</div>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitd-acad-team.html">Primary Contact</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/beforeyouarrive.html">Before you arrive</a>
                            <a className="projectLinks" href="http://online.fliphtml5.com/npkwf/zpfc/#p=1">Student Handbook</a>
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
                            1.5
                        ]}

                    >
                        <div className="section">
                            <div className="subHeading">Accademic Matters</div>
                            <a className="projectLinks" href="https://iiitd.ac.in/academics/resources">Regulations</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Teaching%20and%20Evaluation.pdf">Examination & Assessment</a>
                            <a className="projectLinks" href="https://iiitd.ac.in/life/discipline-grievance/disciplinary-action">Student Conduct</a>
                            <a className="projectLinks" href="hhttps://iiitd.ac.in/academics/issue-resolution">Complaints & acad Appeals</a>
                            <a className="projectLinks" href="https://iiitd.ac.in/form_docs">Forms</a>
                            <a className="projectLinks" href="https://iiitd.ac.in/academics/resources/acad-dishonesty">Academic Dishonesty</a>
                        </div>
                    </Parallax>

                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '-40%',
                            '15%'
                        ]}
                        opacity={[
                            0,
                            1.5
                        ]}
                    >
                        <div className="section">
                            <div className="subHeading">Fees & Funding </div>
                            <a className="projectLinks" href="https://iiitd.ac.in/admission/fees">Course Fee</a>
                            <a className="projectLinks" href="https://iiitd.ac.in/admission/scholarships">Scholarships (UG & PG)</a>
                            <a className="projectLinks" href="https://awards.iiitd.edu.in/">Prizes & Awards</a>
                            <a className="projectLinks" href="https://payments.iiitd.edu.in/pg/studentsfee/">Fee Portal</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Travel%20Assistance%20to%20BTech%20and%20MTech%20Students.pdf">Travel Assistance</a>
                        </div>
                    </Parallax>
                </div>

                <div className="rows">
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
                        <div className="section">
                            <div className="subHeading">Graduation & Leaving IIIT-D</div>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Graduation%20Requirements%20and%20Award%20of%20Degree.pdf">Graduation Requirement</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Issue%20of%20Transcript%20&%20Degree.pdf">Accademic Transcript & Degree</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Leaving%20IIIT-D.pdf">Preparing to leave</a>
                        </div>
                    </Parallax>


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
                        <div className="section">
                            <div className="subHeading">Further Studies</div>
                            <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2021/2021%20January-%20Dual%20Degree%20Regulations_Final.pdf">Dual Degree(B.Tech. & M.Tech.)</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitdstudents.html#">B.Tech. to Ph.D.</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/MTech%20to%20PhD.pdf">M.Tech. to Ph.D.</a>
                        </div>
                    </Parallax>



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
                        <div className="section">
                            <div className="subHeading">FAQ</div>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/faq-all.html">Ph.D.</a>
                            <a className="projectLinks" href="https://academics.iiitd.edu.in/faq-all.html">M.Tech.</a>
                            <a className="projectLinks" href="https://docs.google.com/spreadsheets/d/1w85BGovNseeoUiKojVfF8NYx4NBOw_5UfrIc6ALt4Yo/edit#gid=1213820881">B.Tech.</a>
                        </div>
                    </Parallax>
                </div>
            </ParallaxBanner>
        </div>
    )
}

export default Student