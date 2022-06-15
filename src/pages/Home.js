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
import AcademicTeam from './AcademicTeam'
import Certificates from './Certificates'
import BeforeYouArrive from './BeforeYouArrive'


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
    const [academicTeam, setAcademicTeam] = useState(false)
    const [certificate, setCertificate] = useState(false)
    const [beforeArrive, setBeforeArrive] = useState(false)

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
            <Marquee />
            <Navbar home={home} student={student} faculty={faculty} alumni={alumni} projects={projects} report={report} convocation={convocation} classroom={classroom} contact={contact} academicTeam={academicTeam} setAcademicTeam={setAcademicTeam} certificate={certificate} setCertificate={setCertificate} beforeArrive={beforeArrive} setBeforeArrive={setBeforeArrive} />
            {academicTeam ? <AcademicTeam /> : certificate ? <Certificates /> : beforeArrive ? <BeforeYouArrive /> :
                <div className='homepage-container'>
                    <div ref={home}></div>
                    <AdCarousel />
                    <ParallaxBanner
                        style={{ height: size > 800 ? '350px' : size > 500 ? '250px' : '180px', paddingTop: '5vh' }}
                        layers={[
                            {
                                image: '/IIITD_building.jpg',
                                speed: -30,
                            },
                        ]}
                    >
                        <div className={size > 800 ? "aboutUsContainer" : size > 500 ? "smallAbout" : "vSmallAbout"}>
                            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>About Academics Office</div>
                            <div className={size > 800 ? 'para' : size > 500 ? 'paraSmall' : 'vParaSmall'}>
                                <p>The Academic Office exists to help facilitate, initiate and co-ordinate the academic work of the Institute starting from admission, course registration, examination, and convocation; basically the teaching and assessment of students. It acts as the repository of grades and academic records of all students, both past and present. It provides administrative support to the Senate, which is the highest academic body of the Institute.</p>
                            </div>
                        </div>
                    </ParallaxBanner>

                    <div className="academics">
                        <div className={size > 885 ? "academic" : "academicSmall"}>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                // translateX={[
                                //     '-0%',
                                //     '0%'
                                // ]}
                                opacity={[
                                    0.5,
                                    2.5
                                ]}

                            >

                                <div className={size > 885 ? "team" : size > 500 ? "smallTeam" : "vSmallTeam"}>
                                    <div className="section">
                                        <div to="/academicTeam" style={{ textDecoration: 'none', color: 'white' }}
                                            onClick={() => { setAcademicTeam(true) }}>
                                            <img src='./group.png' alt="" />
                                        </div>
                                        Academic Team
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
                                    0.5,
                                    2.5
                                ]}

                            >
                                <div className={size > 885 ? "team" : size > 500 ? "smallTeam" : "vSmallTeam"}>
                                    <div className="section">
                                        <a href='https://iiitd.ac.in/academics/academic-administration' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                            <div className="">
                                                <img src='./team.png' alt="" />
                                            </div>
                                            Administration
                                        </a>
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
                                    0.5,
                                    2.5
                                ]}

                            >
                                <div className={size > 885 ? "team" : size > 500 ? "smallTeam" : "vSmallTeam"}>
                                    <div className="section">
                                        <a href='https://iiitd.ac.in/academics/issue-resolution' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                            <div className="">
                                                <img src='./question.png' alt="" />
                                            </div>
                                            Issue Resolution

                                        </a>
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
                                    0.5,
                                    2.5
                                ]}

                            >
                                <div className={size > 885 ? "team" : size > 500 ? "smallTeam" : "vSmallTeam"}>
                                    <div className="section">
                                        <a href="https://iiitd.ac.in/academics/resources" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                            <div className="">
                                                <img src='./document.png' alt="" />
                                            </div>
                                            Regulations
                                        </a>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                    <ParallaxBanner
                        style={{ height: size > 1000 ? '300px' : size > 700 ? '280px' : '400px', paddingTop: '1vh' }}
                        layers={[
                            {
                                image:
                                    './IIITD_night.jpg',
                                speed: -30,
                            },
                        ]}
                    >
                        <div className={size > 1000 ? "resource" : size > 700 ? "smallResource" : "vSmallResource"}>

                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateX={[
                                    '-20%',
                                    '15%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className="section">
                                    <div className="subHeading">Academic Calendar</div>
                                    <div className="links">
                                        <div>
                                            <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2021/Academic%20Calendar%20Winter%202022_Final.pdf" style={{ textDecoration: 'none' }}>Winter 2022</a>
                                        </div>
                                        <div>
                                            <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2021/Academic%20Calendar%20B.Tech.%201st%20Sem%20(2021-22%20Batch).pdf" style={{ textDecoration: 'none' }}>B.Tech First Semester (2021-22 Batch)</a>
                                        </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateX={[
                                    '-0%',
                                    '0%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}

                            >
                                <div className="section" style={{ paddingBottom: '6vh' }}>
                                    <div className="subHeading">Timetable</div>
                                    <div className="links">
                                        <div>
                                            <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2022/Add_Drop_TT_Winter%202022%20&%20BTech%201st%20Year_V3.pdf" style={{ textDecoration: 'none' }}>Winter 2022 & BTech First Semester</a>
                                        </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateX={[
                                    '20%',
                                    '-15%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className="section">
                                    <div className="subHeading">Examinations</div>
                                    <div className="links">
                                        <div>
                                            <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2022/Mid%20Sem_UG%201st%20Year%20M21_V1.pdf" style={{ textDecoration: 'none' }}>Schedule for BTech First Semester</a>
                                        </div>
                                        <div>
                                            <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2022/MidSemExamSchedule_BtechIISeniorUGPG.pdf" style={{ textDecoration: 'none' }}>Schedule for BTech Second Year, Senior UG/PG</a>
                                        </div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </ParallaxBanner>

                    <div className={size > 680 ? "internal" : "internalSmall"}>
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
                            <div className={size > 700 ? "team" : size > 500 ? "smallTeam" : "vSmallTeam"}>

                                <div className="section">
                                    <a href="https://iiitd.ac.in/form_docs" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                        <div className="">
                                            <img src='./form.png' alt="" />
                                        </div>
                                        Internal Forms
                                    </a>
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
                            <div className={size > 700 ? "team" : size > 500 ? "smallTeam" : "vSmallTeam"}>
                                <div className="section">
                                    <a href="https://erp.iiitd.edu.in/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                        <div className="">
                                            <img src='./graduate-cap.png' alt="" />
                                        </div>
                                        ERP
                                    </a>
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
                            <div className={size > 700 ? "team" : size > 500 ? "smallTeam" : "vSmallTeam"}>

                                <div className="section">
                                    <a href="http://academics.iiitd.edu.in/meetings/list.php" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                                        <div className="">
                                            <img src='./online-meeting.png' alt="" />
                                        </div>
                                        Important Minutes
                                    </a>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                    <div ref={student}><Student setBeforeArrive={setBeforeArrive} setAcademicTeam={setAcademicTeam} /></div>
                    <div ref={faculty}><Faculty /></div>
                    <div ref={alumni} ><Alumni certificate={certificate} setCertificate={setCertificate} /></div>
                    <div ref={projects}><StudentProjects /></div>
                    <div ref={report}><ReportsStatistics /></div>
                    <div ref={convocation}><Convocation /></div>
                    <div ref={classroom} ><Classrooms /></div>
                    {/* <br /> */}
                    <div ref={contact} ><Contact /></div>
                    <Footer />
                </div >}
        </div >
    )
}

export default Home