import React from 'react'
import AdCarousel from '../components/AdCarousel'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Navbar from '../components/Navbar'
import '../styles/home.css'

const Home = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <AdCarousel />
            <div className="aboutUsContainer">
                <div className="aboutUs">
                    <div className='heading'>About IIITD</div>
                    <p className='para'>
                        IIIT-Delhi is a research-led institute with thriving degree programs at the UG & PG levels.
                        The Academics celebrate the culture of learning by doing. The approach is always to encourage analytical precision with curiosity, playful imagination and searching for ways to solve real life problems in service to the society.
                        The vision is to be socially relevant, industry facing, and globally connected.
                    </p>
                </div>
                <div>
                    <img width='700vw' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Iiitdelhi-building.jpg/501px-Iiitdelhi-building.jpg" alt="" />
                </div>
            </div>
            <div className="academics">
                <div className='subHeading'>Academics</div>
                <div className="academic">
                    <div className="academicTeam">
                        <div className="team">
                            <img src='./group.png' alt="" />
                        </div>
                        Academic Team
                    </div>
                    <div className="academicAdmin">
                        <div className="team">
                            <img src='./team.png' alt="" />
                        </div>
                        Academic Administration
                    </div>
                    <div className="issueResolution">
                        <div className="team">
                            <img src='./question.png' alt="" />
                        </div>
                        Issue Resolution
                    </div>
                    <div className="regulations">
                        <div className="team">
                            <img src='./document.png' alt="" />
                        </div>
                        Regulations
                    </div>
                </div>
            </div>
            <div className="internals">
                <div className="subHeading">Internal</div>
                <div className="internal">
                    <div className="internalForm">
                        Internal Forms
                    </div>
                    <div className="erp">
                        ERP
                    </div>
                    <div className="importantMinutes">
                        Important Minutes
                    </div>
                </div>
            </div>
            <div className="resources">
                <div className="subHeading">Resources</div>
                <div className="resource">
                    <div className="academicCalendar">
                        Academic Calendar
                    </div>
                    <div className="timetable">
                        Timetable
                    </div>
                    <div className="examinations">
                        Examinations
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home