import React, { useState, useEffect, Component } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-scroll'
import { Collapse } from 'react-collapse';

const Navbar = ({ home, student, faculty, alumni, projects, report, convocation, classroom, contact, AcademicTeam }) => {
    const [size, setSize] = useState(window.innerWidth)
    const [isOpened, setIsOpened] = useState(false)
    const [navbarHome, setNavbarHome] = useState('navbarHomeChange');
    const [navbarStudent, setNavbarStudent] = useState('navbarStudent');
    const [navbarFaculty, setNavbarFaculty] = useState('navbarFaculty');
    const [navbarAlumni, setNavbarAlumni] = useState('navbarAlumni');
    const [navbarProjects, setNavbarProjects] = useState('navbarProjects');
    const [navbarReport, setNavbarReport] = useState('navbarReport');
    const [navbarConvocation, setNavbarConvocation] = useState('navbarConvocation');
    const [navbarClassroom, setNavbarClassroom] = useState('navbarClassroom');
    const [navbarContact, setNavbarContact] = useState('navbarContact');
    const changeNavbar = (e) => {
        if (window.scrollY < home.current.offsetTop + 200) {
            setNavbarHome('navbarHomeChange');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= home.current.offsetTop + 1050 && window.scrollY < student.current.offsetTop) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudentChange');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= student.current.offsetTop + 500 && window.scrollY < faculty.current.offsetTop) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFacultyChange');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= faculty.current.offsetTop + 450 && window.scrollY < alumni.current.offsetTop) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumniChange');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= alumni.current.offsetTop + 400 && window.scrollY < projects.current.offsetTop) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjectsChange');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= projects.current.offsetTop + 100 && window.scrollY < report.current.offsetTop) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReportChange');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= report.current.offsetTop + 620 && window.scrollY < convocation.current.offsetTop + 100) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocationChange');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= convocation.current.offsetTop + 400 && window.scrollY < classroom.current.offsetTop) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroomChange');
            setNavbarContact('navbarContact');
        } else if (window.scrollY >= classroom.current.offsetTop && window.scrollY < contact.current.offsetTop) {
            setNavbarHome('navbarHome');
            setNavbarStudent('navbarStudent');
            setNavbarFaculty('navbarFaculty');
            setNavbarAlumni('navbarAlumni');
            setNavbarProjects('navbarProjects');
            setNavbarReport('navbarReport');
            setNavbarConvocation('navbarConvocation');
            setNavbarClassroom('navbarClassroom');
            setNavbarContact('navbarContactChange');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return () => window.removeEventListener('scroll', changeNavbar);
    }, []);
    const scrollDown = (ref) => {
        window.scrollTo({ top: ref.current.offsetTop - 100 });
    };
    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowDimensions)
        console.log(size);
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [window.innerWidth])
    return (
        <div className='navContainer'>
            <div className="navbar">
                {size < 590 ?
                    <div>
                        <a href='/' style={{ cursor: 'pointer' }}>
                            <img width="100vw" src="https://www.sarkarijobalert.co.in/wp-content/uploads/2021/02/logo-of-iiit-delhi-Recruitmentlogo.jpg"></img>
                        </a>
                    </div>
                    :
                    <div>
                        <a href='/' style={{ cursor: 'pointer' }}>
                            <img width="400vw" src="https://www.iiitd.ac.in/sites/default/files/style3colorsmall.png"></img>
                        </a>
                    </div>}
                {(size < 1490 ?
                    <div>
                        <img src="./more.png" onClick={(e) => { console.log(isOpened); isOpened ? setIsOpened(false) : setIsOpened(true) }} width="50vw" alt="" />
                    </div> : null)
                }
                {size > 1490 ?
                    <a href={AcademicTeam ? '/' : '#'} onClick={() => scrollDown(home)} className={navbarHome}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarHome === 'navbarHome' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarHome === 'navbarHome' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        HOME
                    </a> : null}
                {size > 1490 ?
                    <Link to='student' onClick={() => scrollDown(student)} className={navbarStudent}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarStudent === 'navbarStudent' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarStudent === 'navbarStudent' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        STUDENTS
                    </Link> : null}
                {size > 1490 ?
                    <Link to='faculty' onClick={() => scrollDown(faculty)} className={navbarFaculty}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarFaculty === 'navbarFaculty' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarFaculty === 'navbarFaculty' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        FACULTY
                    </Link> : null}
                {size > 1490 ?
                    <Link to='alumni' onClick={() => scrollDown(alumni)} className={navbarAlumni}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarAlumni === 'navbarAlumni' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarAlumni === 'navbarAlumni' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        ALUMNI
                    </Link> : null}
                {size > 1490 ?
                    <Link to='projects' onClick={() => scrollDown(projects)} className={navbarProjects}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarProjects === 'navbarProjects' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarProjects === 'navbarProjects' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        STUDENT'S PROJECTS
                    </Link> : null}
                {size > 1490 ?
                    <Link to='report' onClick={() => scrollDown(report)} className={navbarReport}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarReport === 'navbarReport' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarReport === 'navbarReport' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        REPORT & STATISTICS
                    </Link> : null}
                {size > 1490 ?
                    <Link to='convocation' onClick={() => scrollDown(convocation)} className={navbarConvocation}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarConvocation === 'navbarConvocation' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarConvocation === 'navbarConvocation' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        CONVOCATION
                    </Link> : null}
                {size > 1490 ?
                    <Link to='classroom' onClick={() => scrollDown(classroom)} className={navbarClassroom}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarClassroom === 'navbarClassroom' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarClassroom === 'navbarClassroom' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        CLASSROOMS
                    </Link> : null}
                {size > 1490 ?
                    <Link to='contact' onClick={() => scrollDown(contact)} className={navbarContact}
                        style={{
                            transition: 'background-color 1s',
                            padding: '1.5vh',
                            backgroundColor: navbarContact === 'navbarContact' ? 'white' : 'rgb(3, 168, 163)',
                            color: navbarContact === 'navbarContact' ? 'black' : 'white',
                            cursor: 'pointer'
                        }}>
                        CONTACT
                    </Link> : null}
            </div >
            <Collapse isOpened={isOpened}>
                <div style={{ backgroundColor: 'white', paddingBottom: '1vh' }}>
                    <div style={{ marginBottom: '3vh' }}>
                        <a href={AcademicTeam ? '/' : '#'} onClick={() => scrollDown(home)}
                            style={{
                                transition: 'background-color 1s',
                                textDecoration: 'none',
                                padding: '1.5vh',
                                backgroundColor: navbarHome === 'navbarHome' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarHome === 'navbarHome' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            HOME
                        </a>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='student' onClick={() => scrollDown(student)} className={navbarStudent}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                textDecoration: 'none', padding: '1.5vh',
                                backgroundColor: navbarStudent === 'navbarStudent' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarStudent === 'navbarStudent' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            STUDENTS
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='faculty' onClick={() => scrollDown(faculty)} className={navbarFaculty}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                textDecoration: 'none', padding: '1.5vh',
                                backgroundColor: navbarFaculty === 'navbarFaculty' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarFaculty === 'navbarFaculty' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            FACULTY
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='alumni' onClick={() => scrollDown(alumni)} className={navbarAlumni}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                padding: '1.5vh',
                                backgroundColor: navbarAlumni === 'navbarAlumni' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarAlumni === 'navbarAlumni' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            ALUMNI
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='projects' onClick={() => scrollDown(projects)} className={navbarProjects}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                padding: '1.5vh',
                                backgroundColor: navbarProjects === 'navbarProjects' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarProjects === 'navbarProjects' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            STUDENT'S PROJECTS
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='report' onClick={() => scrollDown(report)} className={navbarReport}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                padding: '1.5vh',
                                backgroundColor: navbarReport === 'navbarReport' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarReport === 'navbarReport' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            REPORT & STATISTICS
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='convocation' onClick={() => scrollDown(convocation)} className={navbarConvocation}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                padding: '1.5vh',
                                backgroundColor: navbarConvocation === 'navbarConvocation' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarConvocation === 'navbarConvocation' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            CONVOCATION
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='classroom' onClick={() => scrollDown(classroom)} className={navbarClassroom}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                padding: '1.5vh',
                                backgroundColor: navbarClassroom === 'navbarClassroom' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarClassroom === 'navbarClassroom' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            CLASSROOMS
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>
                        <Link to='contact' onClick={() => scrollDown(contact)} className={navbarContact}
                            style={{
                                paddingLeft: '1vh',
                                paddingRight: '1vh',
                                transition: 'background-color 1s',
                                padding: '1.5vh',
                                backgroundColor: navbarContact === 'navbarContact' ? 'white' : 'rgb(3, 168, 163)',
                                color: navbarContact === 'navbarContact' ? 'black' : 'white',
                                cursor: 'pointer'
                            }}>
                            CONTACT
                        </Link>
                    </div>
                    <div style={{ marginBottom: '3vh' }}>

                    </div>
                </div>
            </Collapse>

        </div>
    )
}

export default Navbar