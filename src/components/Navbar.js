import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img width="400vw" src="https://www.iiitd.ac.in/sites/default/files/style3colorsmall.png"></img>
            </div>
            <div><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
            <div><Link to='/student' style={{ textDecoration: 'none', color: 'black' }}>Students</Link></div>
            <div><Link to='/faculty' style={{ textDecoration: 'none', color: 'black' }}>Faculty</Link></div>
            <div><Link to='/alumni' style={{ textDecoration: 'none', color: 'black' }}>Alumni</Link></div>
            <div><Link to='/studentProjects' style={{ textDecoration: 'none', color: 'black' }}>Student's Projects</Link></div>
            <div><Link to='/reportStats' style={{ textDecoration: 'none', color: 'black' }}>Report & Statistics</Link></div>
            <div><Link to='/convocation' style={{ textDecoration: 'none', color: 'black' }}>Convocation</Link></div>
            <div><Link to='/classrooms' style={{ textDecoration: 'none', color: 'black' }}>Classrooms</Link></div>
            <div><Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></div>
        </div>
    )
}

export default Navbar