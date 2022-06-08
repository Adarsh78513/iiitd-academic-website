import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import AdCarousel from '../components/AdCarousel'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import Student from './Student'
import '../styles/home.css'
import Faculty from './Faculty'
import Alumni from './Alumni'
import StudentProjects from './StudentProjects'
import ReportsStatistics from './ReportsStatistics'
import Convocation from './Convocation'
import Classrooms from './Classrooms'
import Contact from './Contact'
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';


const Home = () => {
    const home = useRef(null);
    const student = useRef(null);
    const faculty = useRef(null);
    const alumni = useRef(null);
    const projects = useRef(null);
    const report = useRef(null);
    const convocation = useRef(null);
    const classroom = useRef(null);
    const contact = useRef(null);

    return (
        <div>
            <div ref={home}></div>
            <Marquee />
            <Navbar home={home} student={student} faculty={faculty} alumni={alumni} projects={projects} report={report} convocation={convocation} classroom={classroom} contact={contact} />
            <AdCarousel />

            <ParallaxBanner
                style={{ height: '400px' }}
                layers={[
                    {
                        image: '/IIITD_building.jpg',
                        speed: -30,
                    },
                ]}
            >

                <div className="aboutUsContainer">
                    <div className="aboutUs">
                        <div className='heading'>About IIITD</div>
                        <p className='para'>
                            IIIT-Delhi is a research-led institute with thriving degree programs at the UG & PG levels.
                            The Academics celebrate the culture of learning by doing. The approach is always to encourage analytical precision with curiosity, playful imagination and searching for ways to solve real life problems in service to the society.
                            The vision is to be socially relevant, industry facing, and globally connected.
                        </p>
                    </div>
                </div>

            </ParallaxBanner>

            <div className="academics">
                <div className='subHeading'>Academics</div>
                <div className="academic">
                    <div className="section">
                        <Link to="/academicTeam" style={{ textDecoration: 'none', color: 'white' }} >
                            <div className="">
                                <div className="team">
                                    <img src='./group.png' alt="" />
                                </div>
                                Academic Team
                            </div>
                        </Link>
                    </div>
                    <div className="section">
                        <a href='https://iiitd.ac.in/academics/academic-administration' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                            <div className="">
                                <div className="team">
                                    <img src='./team.png' alt="" />
                                </div>
                                Academic Administration
                            </div>
                        </a>
                    </div>
                    <div className="section">
                        <a href='https://iiitd.ac.in/academics/issue-resolution' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                            <div className="">
                                <div className="team">
                                    <img src='./question.png' alt="" />
                                </div>
                                Issue Resolution
                            </div>
                        </a>
                    </div>
                    <div className="section">
                        <a href="https://iiitd.ac.in/academics/resources" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                            <div className="">
                                <div className="team">
                                    <img src='./document.png' alt="" />
                                </div>
                                Regulations
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <ParallaxBanner
                style={{ height: '450px' }}
                layers={[
                    {
                        image:
                            './IIITD_night.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className="internals">
                    <div className="subHeading">Internal</div>
                    <div className="internal">
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
                                <a href="https://iiitd.ac.in/form_docs" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                    <div className="">
                                        <div className="team">
                                            <img src='./form.png' alt="" />
                                        </div>
                                        Internal Forms
                                    </div>
                                </a>
                            </div>
                        </Parallax>
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateX={[
                                '5%',
                                '-5%'
                            ]}
                            opacity={[
                                0,
                                1.5
                            ]}
                        >
                            <div className="section">
                                <a href="https://erp.iiitd.edu.in/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                    <div className="">
                                        <div className="team">
                                            <img src='./graduate-cap.png' alt="" />
                                        </div>
                                        ERP
                                    </div>
                                </a>
                            </div>
                        </Parallax>
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateX={[
                                '40%',
                                '-15%'
                            ]}
                            opacity={[
                                0,
                                1.5
                            ]}
                        >
                            <div className="section">
                                <a href="http://academics.iiitd.edu.in/meetings/list.php" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                    <div className="">
                                        <div className="team">
                                            <img src='./online-meeting.png' alt="" />
                                        </div>
                                        Important Minutes
                                    </div>
                                </a>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </ParallaxBanner>
            <div className="resources">
                <div className="subHeading">Resources</div>
                <div className="resource">
                    <div className="academicCalendar">
                        <div className="tabHead">Academic Calendar</div>
                        <div className="links">
                            <div>
                                <a href="https://iiitd.ac.in/sites/default/files/docs/education/2021/Academic%20Calendar%20Winter%202022_Final.pdf" style={{ textDecoration: 'none' }}>Winter 2022</a>
                            </div>
                            <div>
                                <a href="https://iiitd.ac.in/sites/default/files/docs/education/2021/Academic%20Calendar%20B.Tech.%201st%20Sem%20(2021-22%20Batch).pdf" style={{ textDecoration: 'none' }}>B.Tech First Semester (2021-22 Batch)</a>
                            </div>
                        </div>
                    </div>
                    <div className="timetable">
                        <div className="tabHead">Timetable</div>
                        <div className="links">
                            <div>
                                <a href="https://iiitd.ac.in/sites/default/files/docs/education/2022/Add_Drop_TT_Winter%202022%20&%20BTech%201st%20Year_V3.pdf" style={{ textDecoration: 'none' }}>Winter 2022 & BTech First Semester</a>
                            </div>
                        </div>
                    </div>
                    <div className="examinations">
                        <div className="tabHead">Examinations</div>
                        <div className="links">
                            <div>
                                <a href="https://iiitd.ac.in/sites/default/files/docs/education/2022/Mid%20Sem_UG%201st%20Year%20M21_V1.pdf" style={{ textDecoration: 'none' }}>Schedule for BTech First Semester</a>
                            </div>
                            <div>
                                <a href="https://iiitd.ac.in/sites/default/files/docs/education/2022/MidSemExamSchedule_BtechIISeniorUGPG.pdf" style={{ textDecoration: 'none' }}>Schedule for BTech Second Year, Senior UG/PG</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={student}><Student /></div>
            <div ref={faculty}><Faculty /></div>
            <div ref={alumni} ><Alumni /></div>
            <div ref={projects}><StudentProjects /></div>
            <div ref={report}><ReportsStatistics /></div>
            <div ref={convocation}><Convocation /></div>
            <div ref={classroom} ><Classrooms /></div>
            <div ref={contact} ><Contact /></div>
            <Footer />
        </div>
    )
}

export default Home