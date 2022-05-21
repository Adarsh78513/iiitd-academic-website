import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img width="400vw" src="https://www.iiitd.ac.in/sites/default/files/style3colorsmall.png"></img>
            </div>
            <div><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></div>
            <div><Link to='/student' style={{ textDecoration: 'none' }}>Students</Link></div>
            <div><Link to='/faculty' style={{ textDecoration: 'none' }}>Faculty</Link></div>
            <div><Link to='/alumni' style={{ textDecoration: 'none' }}>Alumni</Link></div>
            <div><Link to='/reportStats' style={{ textDecoration: 'none' }}>Report & Statistics</Link></div>
            <div><Link to='/convocation' style={{ textDecoration: 'none' }}>Convocation</Link></div>
            <div><Link to='/classrooms' style={{ textDecoration: 'none' }}>Classrooms</Link></div>
            <div><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link></div>
        </div>
    )
}

export default Navbar