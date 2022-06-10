import React, { useRef, useState, useEffect } from 'react'
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
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';


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
        <div className='homepage'>
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
                <div className={size > 700 ? "aboutUsContainer" : "about"}>
                    <div className='heading'>About IIITD</div>
                    <p className={size > 700 ? 'para' : 'paraSmall'}>
                        IIIT-Delhi is a research-led institute with thriving degree programs at the UG & PG levels.
                        The Academics celebrate the culture of learning by doing. The approach is always to encourage analytical precision with curiosity, playful imagination and searching for ways to solve real life problems in service to the society.
                    </p>
                </div>
            </ParallaxBanner>

            <div className="academics">
                <div className={size > 885 ? "academic" : "academicSmall"}>
                    <div className="section">
                        <Link to="/academicTeam" style={{ textDecoration: 'none', color: 'white' }} >
                            <div className="">
                                <div className="team">
                                    <img style={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }} src='./group.png' alt="" />
                                </div>
                                Academic Team
                            </div>
                        </Link>
                    </div>
                    <div className="section">
                        <a href='https://iiitd.ac.in/academics/academic-administration' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                            <div className="">
                                <div className="team">
                                    <img style={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }} src='./team.png' alt="" />
                                </div>
                                Academic Administration
                            </div>
                        </a>
                    </div>
                    <div className="section">
                        <a href='https://iiitd.ac.in/academics/issue-resolution' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                            <div className="">
                                <div className="team">
                                    <img style={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }} src='./question.png' alt="" />
                                </div>
                                Issue Resolution
                            </div>
                        </a>
                    </div>
                    <div className="section">
                        <a href="https://iiitd.ac.in/academics/resources" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                            <div className="">
                                <div className="team">
                                    <img style={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }} src='./document.png' alt="" />
                                </div>
                                Regulations
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="resources">
                <div className="resource">

                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        // translateX={[
                        //     '40%',
                        //     '-30%'
                        // ]}
                        opacity={[
                            0,
                            2.5
                        ]}
                    >
                        <div className="section">
                            <div className="subHeading">Academic Calendar</div>
                            <div className="links">
                                <div>
                                    <a href="https://iiitd.ac.in/sites/default/files/docs/education/2021/Academic%20Calendar%20Winter%202022_Final.pdf" style={{ textDecoration: 'none' }}>Winter 2022</a>
                                </div>
                                <div>
                                    <a href="https://iiitd.ac.in/sites/default/files/docs/education/2021/Academic%20Calendar%20B.Tech.%201st%20Sem%20(2021-22%20Batch).pdf" style={{ textDecoration: 'none' }}>B.Tech First Semester (2021-22 Batch)</a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        // translateX={[
                        //     '-0%',
                        //     '0%'
                        // ]}
                        opacity={[
                            0,
                            2.5
                        ]}

                    >
                        <div className="section" style={{ paddingBottom: '6vh' }}>
                            <div className="subHeading">Timetable</div>
                            <div className="links">
                                <div>
                                    <a href="https://iiitd.ac.in/sites/default/files/docs/education/2022/Add_Drop_TT_Winter%202022%20&%20BTech%201st%20Year_V3.pdf" style={{ textDecoration: 'none' }}>Winter 2022 & BTech First Semester</a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        // translateX={[
                        //     '-40%',
                        //     '20%'
                        // ]}
                        opacity={[
                            0,
                            2.5
                        ]}
                    >
                        <div className="section">
                            <div className="subHeading">Examinations</div>
                            <div className="links">
                                <div>
                                    <a href="https://iiitd.ac.in/sites/default/files/docs/education/2022/Mid%20Sem_UG%201st%20Year%20M21_V1.pdf" style={{ textDecoration: 'none' }}>Schedule for BTech First Semester</a>
                                </div>
                                <div>
                                    <a href="https://iiitd.ac.in/sites/default/files/docs/education/2022/MidSemExamSchedule_BtechIISeniorUGPG.pdf" style={{ textDecoration: 'none' }}>Schedule for BTech Second Year, Senior UG/PG</a>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
            <ParallaxBanner
                style={{ height: size > 680 ? '40vh' : '100vh', paddingTop: '1vh' }}
                layers={[
                    {
                        image:
                            './IIITD_night.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className={size > 680 ? "internal" : "internalSmall"}>
                    <Parallax
                        className="Parallax-module__smallLinear--MqSo+"
                        translateX={[
                            '-40%',
                            '15%'
                        ]}
                        opacity={[
                            0,
                            2.5
                        ]}
                    >
                        <div className="section">
                            <a href="https://iiitd.ac.in/form_docs" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                <div className="">
                                    <div className="team">
                                        <img style={{
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }} src='./form.png' alt="" />
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
                            2.5
                        ]}
                    >
                        <div className="section">
                            <a href="https://erp.iiitd.edu.in/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                <div className="">
                                    <div className="team">
                                        <img style={{
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }} src='./graduate-cap.png' alt="" />
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
                            2.5
                        ]}
                    >
                        <div className="section">
                            <a href="http://academics.iiitd.edu.in/meetings/list.php" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                <div className="">
                                    <div className="team">
                                        <img style={{
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }} src='./online-meeting.png' alt="" />
                                    </div>
                                    Important Minutes
                                </div>
                            </a>
                        </div>
                    </Parallax>
                </div>
            </ParallaxBanner>

            <div ref={student}><Student /></div>
            <div ref={faculty}><Faculty /></div>
            <div ref={alumni} ><Alumni /></div>
            <div ref={projects}><StudentProjects /></div>
            <div ref={report}><ReportsStatistics /></div>
            <div ref={convocation}><Convocation /></div>
            <div ref={classroom} ><Classrooms /></div>
            {/* <br /> */}
            <div ref={contact} ><Contact /></div>
            <Footer />
        </div >
    )
}

export default Home