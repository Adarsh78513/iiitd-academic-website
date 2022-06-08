import React, { useState, useEffect, Component } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-scroll'

const Navbar = ({ home, student, faculty, alumni, projects, report, convocation, classroom, contact, AcademicTeam }) => {
    const [navbarHome, setNavbarHome] = useState(true);
    const [navbarStudent, setNavbarStudent] = useState(false);
    const [navbarFaculty, setNavbarFaculty] = useState(false);
    const [navbarAlumni, setNavbarAlumni] = useState(false);
    const [navbarProjects, setNavbarProjects] = useState(false);
    const [navbarReport, setNavbarReport] = useState(false);
    const [navbarConvocation, setNavbarConvocation] = useState(false);
    const [navbarClassroom, setNavbarClassroom] = useState(false);
    const [navbarContact, setNavbarContact] = useState(false);
    const changeNavbar = (e) => {
        if (window.scrollY < 100) {
            setNavbarHome(true);
            setNavbarStudent(false);
            setNavbarFaculty(false);
            setNavbarAlumni(false);
            setNavbarProjects(false);
            setNavbarReport(false);
            setNavbarConvocation(false);
            setNavbarClassroom(false);
            setNavbarContact(false);
        } else if (window.scrollY >= 100 && window.scrollY < 200) {
            setNavbarHome(false);
            setNavbarStudent(true);
            setNavbarFaculty(false);
            setNavbarAlumni(false);
            setNavbarProjects(false);
            setNavbarReport(false);
            setNavbarConvocation(false);
            setNavbarClassroom(false);
            setNavbarContact(false);
        } else if (window.scrollY >= 200 && window.scrollY < 300) {
            setNavbarHome(false);
            setNavbarStudent(false);
            setNavbarFaculty(true);
            setNavbarAlumni(false);
            setNavbarProjects(false);
            setNavbarReport(false);
            setNavbarConvocation(false);
            setNavbarClassroom(false);
            setNavbarContact(false);
        } else if (window.scrollY >= 300 && window.scrollY < 400) {
            setNavbarHome(false);
            setNavbarStudent(false);
            setNavbarFaculty(false);
            setNavbarAlumni(true);
            setNavbarProjects(false);
            setNavbarReport(false);
            setNavbarConvocation(false);
            setNavbarClassroom(false);
            setNavbarContact(false);
        } else if (window.scrollY >= 400 && window.scrollY < 500) {
            setNavbarHome(false);
            setNavbarStudent(false);
            setNavbarFaculty(false);
            setNavbarAlumni(false);
            setNavbarProjects(true);
            setNavbarReport(false);
            setNavbarConvocation(false);
            setNavbarClassroom(false);
            setNavbarContact(false);
        } else if (window.scrollY >= 500 && window.scrollY < 600) {
            setNavbarHome(false);
            setNavbarStudent(false);
            setNavbarFaculty(false);
            setNavbarAlumni(false);
            setNavbarProjects(false);
            setNavbarReport(true);
            setNavbarConvocation(false);
            setNavbarClassroom(false);
            setNavbarContact(false);
        } else if (window.scrollY >= 600 && window.scrollY < 700) {
            setNavbarHome(false);
            setNavbarStudent(false);
            setNavbarFaculty(false);
            setNavbarAlumni(false);
            setNavbarProjects(false);
            setNavbarReport(false);
            setNavbarConvocation(true);
            setNavbarClassroom(false);
            setNavbarContact(false);
        } else if (window.scrollY >= 700 && window.scrollY < 800) {
            setNavbarHome(false);
            setNavbarStudent(false);
            setNavbarFaculty(false);
            setNavbarAlumni(false);
            setNavbarProjects(false);
            setNavbarReport(false);
            setNavbarConvocation(false);
            setNavbarClassroom(true);
            setNavbarContact(false);
        } else if (window.scrollY >= 800 && window.scrollY < 900) {
            setNavbarHome(false);
            setNavbarStudent(false);
            setNavbarFaculty(false);
            setNavbarAlumni(false);
            setNavbarProjects(false);
            setNavbarReport(false);
            setNavbarConvocation(false);
            setNavbarClassroom(false);
            setNavbarContact(true);
        }
    };
    useEffect(() => {
        changeNavbar();
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
            <Link to={AcademicTeam ? '/' : 'home'} onClick={() => scrollDown(home)} className={navbarHome ? 'navbarHomeChange' : 'navbarHome'}>Home</Link>
            <Link to='student' onClick={() => scrollDown(student)} className={navbarStudent ? 'navbarStudentChange' : 'navbarStudent'}>Students</Link>
            <Link to='faculty' onClick={() => scrollDown(faculty)} className={navbarFaculty ? 'navbarFacultyChange' : 'navbarFaculty'}>Faculty</Link>
            <Link to='alumni' onClick={() => scrollDown(alumni)} className={navbarAlumni ? 'navbarAlumniChange' : 'navbarAlumni'}>Alumni</Link>
            <Link to='projects' onClick={() => scrollDown(projects)} className={navbarProjects ? 'navbarProjectsChange' : 'navbarProjects'}>Student's Projects</Link>
            <Link to='report' onClick={() => scrollDown(report)} className={navbarReport ? 'navbarReportChange' : 'navbarReport'}>Report & Statistics</Link>
            <Link to='convocation' onClick={() => scrollDown(convocation)} className={navbarConvocation ? 'navbarConvocationChange' : 'navbarConvocation'}>Convocation</Link>
            <Link to='classroom' onClick={() => scrollDown(classroom)} className={navbarClassroom ? 'navbarClassroomChange' : 'navbarClassroom'}>Classrooms</Link>
            <Link to='contact' onClick={() => scrollDown(contact)} className={navbarContact ? 'navbarContactChange' : 'navbarContact'}>Contact</Link>
        </div >
    )
}

export default Navbar