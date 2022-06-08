import React, { useState, useEffect, Component } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-scroll'

const Navbar = ({ home, student, faculty, alumni, projects, report, convocation, classroom, contact, AcademicTeam }) => {
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
        } else if (window.scrollY >= home.current.offsetTop + 1650 && window.scrollY < student.current.offsetTop) {
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
    return (
        <div className="navbar">
            <div>
                <Link to='/'>
                    <img width="400vw" src="https://www.iiitd.ac.in/sites/default/files/style3colorsmall.png"></img>
                </Link>
            </div>
            <Link to={AcademicTeam ? '/' : 'home'} onClick={() => scrollDown(home)} className={navbarHome}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarHome === 'navbarHome' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarHome === 'navbarHome' ? 'black' : 'white',
                }}>
                HOME
            </Link>
            <Link to='student' onClick={() => scrollDown(student)} className={navbarStudent}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarStudent === 'navbarStudent' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarStudent === 'navbarStudent' ? 'black' : 'white',
                }}>
                STUDENTS
            </Link>
            <Link to='faculty' onClick={() => scrollDown(faculty)} className={navbarFaculty}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarFaculty === 'navbarFaculty' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarFaculty === 'navbarFaculty' ? 'black' : 'white',
                }}>
                FACULTY
            </Link>
            <Link to='alumni' onClick={() => scrollDown(alumni)} className={navbarAlumni}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarAlumni === 'navbarAlumni' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarAlumni === 'navbarAlumni' ? 'black' : 'white',
                }}>
                ALUMNI
            </Link>
            <Link to='projects' onClick={() => scrollDown(projects)} className={navbarProjects}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarProjects === 'navbarProjects' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarProjects === 'navbarProjects' ? 'black' : 'white',
                }}>
                STUDENT'S PROJECTS
            </Link>
            <Link to='report' onClick={() => scrollDown(report)} className={navbarReport}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarReport === 'navbarReport' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarReport === 'navbarReport' ? 'black' : 'white',
                }}>
                REPORT & STATISTICS
            </Link>
            <Link to='convocation' onClick={() => scrollDown(convocation)} className={navbarConvocation}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarConvocation === 'navbarConvocation' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarConvocation === 'navbarConvocation' ? 'black' : 'white',
                }}>
                CONVOCATION
            </Link>
            <Link to='classroom' onClick={() => scrollDown(classroom)} className={navbarClassroom}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarClassroom === 'navbarClassroom' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarClassroom === 'navbarClassroom' ? 'black' : 'white',
                }}>
                CLASSROOMS
            </Link>
            <Link to='contact' onClick={() => scrollDown(contact)} className={navbarContact}
                style={{
                    transition: 'background-color 1s',
                    padding: '1.5vh',
                    backgroundColor: navbarContact === 'navbarContact' ? 'white' : 'rgb(3, 168, 163)',
                    color: navbarContact === 'navbarContact' ? 'black' : 'white',
                }}>
                CONTACT
            </Link>
        </div >
    )
}

export default Navbar