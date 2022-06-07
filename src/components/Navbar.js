import React, { useState, useEffect } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
    const scrollDown = (h) => {
        window.scrollTo({
            top: h,
            behavior: 'smooth',
        });
    };
    return (
        <div className="navbar">
            <div>
                <img width="400vw" src="https://www.iiitd.ac.in/sites/default/files/style3colorsmall.png"></img>
            </div>
            <Link to='/' onClick={() => scrollDown(0)} className={navbarHome ? 'navbarHomeChange' : 'navbarHome'}>Home</Link>
            <Link to='/' onClick={() => scrollDown(1720)} className={navbarStudent ? 'navbarStudentChange' : 'navbarStudent'}>Students</Link>
            <Link to='/' onClick={() => scrollDown(2300)} className={navbarFaculty ? 'navbarFacultyChange' : 'navbarFaculty'}>Faculty</Link>
            <Link to='/' onClick={() => scrollDown(3300)} className={navbarAlumni ? 'navbarAlumniChange' : 'navbarAlumni'}>Alumni</Link>
            <Link to='/' onClick={() => scrollDown(3920)} className={navbarProjects ? 'navbarProjectsChange' : 'navbarProjects'}>Student's Projects</Link>
            <Link to='/' onClick={() => scrollDown(4300)} className={navbarReport ? 'navbarReportChange' : 'navbarReport'}>Report & Statistics</Link>
            <Link to='/' onClick={() => scrollDown(4800)} className={navbarConvocation ? 'navbarConvocationChange' : 'navbarConvocation'}>Convocation</Link>
            <Link to='/' onClick={() => scrollDown(5300)} className={navbarClassroom ? 'navbarClassroomChange' : 'navbarClassroom'}>Classrooms</Link>
            <Link to='/' onClick={() => scrollDown(5800)} className={navbarContact ? 'navbarContactChange' : 'navbarContact'}>Contact</Link>
        </div >
    )
}

export default Navbar