import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import '../styles/academicTeam.css'

import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

const AcademicTeam = () => {
    const [size, setSize] = useState(window.innerWidth)
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowDimensions)
        console.log(size);
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [window.innerWidth])
    return (
        <div>
            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>Academic Team</div>
            <ParallaxBanner
                style={{ height: size > 800 ? '450px' : size > 500 ? '300px' : '200px', paddingTop: '5vh' }}
                layers={[
                    {
                        image: '/IIITD_building.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className="containerTeam">

                    <div className="dean">

                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateY={[
                                '30%',
                                '-40%'
                            ]}
                            opacity={[
                                0,
                                2.5
                            ]}
                        >
                            <div className={size > 800 ? 'subTeam' : size > 500 ? 'smallSubTeam' : 'vSmallSubTeam'} style={{ color: 'rgb(3,168,163)' }}>DoAA, Registrar</div>
                        </Parallax>
                        <div className="cardContainer">
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    size > 800 ? '10%' : size > 500 ? '30%' : '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://www.iiitd.ac.in/sites/default/files/images/faculty/puspendra.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">PROF. PUSHPENDRA SINGH</div>
                                        <div className="des">DoAA</div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    size > 800 ? '10%' : size > 500 ? '30%' : '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/registrar-asolanki.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">DR. ASHOK KUMAR SOLANKI</div>
                                        <div className="des">Registrar</div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                    <div className="adminAcademic">
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateY={[
                                '30%',
                                '-40%'
                            ]}
                            opacity={[
                                0,
                                2.5
                            ]}
                        >
                            <div className={size > 800 ? 'subTeam' : size > 500 ? 'smallSubTeam' : 'vSmallSubTeam'} style={{ color: 'rgb(3,168,163)' }}>Admin Academic</div>
                        </Parallax>
                        <div className="cardContainer">
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    size > 800 ? '10%' : size > 500 ? '30%' : '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/asutosh.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">ASHUTOSH BRAHMA</div>
                                        <div className="des">Deputy Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    size > 800 ? '10%' : size > 500 ? '30%' : '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/kpsingh.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">K P SINGH</div>
                                        <div className="des">Consultant </div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </ParallaxBanner>
            <ParallaxBanner
                style={{ height: size > 800 ? '450px' : size > 500 ? '300px' : '200px', paddingTop: '5vh' }}
                layers={[
                    {
                        speed: -30,
                    },
                ]}
            >
                <div className="containerTeam">
                    <div className="adminBTech">
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateY={[
                                '30%',
                                '-40%'
                            ]}
                            opacity={[
                                0,
                                2.5
                            ]}
                        >
                            <div className={size > 800 ? 'subTeam' : size > 500 ? 'smallSubTeam' : 'vSmallSubTeam'}>Admin B.Tech</div>
                        </Parallax>
                        <div className="cardContainer">
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/nisha.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">NISHA NARWAL</div>
                                        <div className="des">Assistant Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/aakash.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">AAKASH GUPTA</div>
                                        <div className="des">Junior Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/ashisha.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">ASHISH AGGARWAL</div>
                                        <div className="des">Junior Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/sudhanshut.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">SUDHANSHU TAMTA</div>
                                        <div className="des">Junior Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </ParallaxBanner>
            <ParallaxBanner
                style={{ height: size > 800 ? '450px' : size > 500 ? '300px' : '200px', paddingTop: '5vh' }}
                layers={[
                    {
                        image: '/IIITD_night.jpg',
                        speed: -30,
                    },
                ]}
            >
                <div className="containerTeam">
                    <div className="adminMTech">
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateY={[
                                '30%',
                                '-40%'
                            ]}
                            opacity={[
                                0,
                                2.5
                            ]}
                        >
                            <div className={size > 800 ? 'subTeam' : size > 500 ? 'smallSubTeam' : 'vSmallSubTeam'} style={{ color: 'rgb(3,168,163)' }}>Admin M.Tech</div>
                        </Parallax>

                        <div className="cardContainer">
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/asutosh.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">ASHUTOSH BRAHMA</div>
                                        <div className="des">Deputy Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/mohit.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">MOHIT KUMAR</div>
                                        <div className="des">Junior Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                    <div className="adminPhD">
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateY={[
                                '30%',
                                '-40%'
                            ]}
                            opacity={[
                                0,
                                2.5
                            ]}
                        >
                            <div className={size > 800 ? 'subTeam' : size > 500 ? 'smallSubTeam' : 'vSmallSubTeam'} style={{ color: 'rgb(3,168,163)' }}>Admin Ph.D</div>
                        </Parallax>
                        <div className="cardContainer">
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/anshu.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">ANSHU DUREJA</div>
                                        <div className="des">Deputy Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/raju.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">RAJU BISWAS</div>
                                        <div className="des">Junior Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </ParallaxBanner>
            <ParallaxBanner
                style={{ height: size > 800 ? '450px' : size > 500 ? '300px' : '200px', paddingTop: '5vh' }}
                layers={[
                    {
                        speed: -30,
                    },
                ]}
            >
                <div className="containerTeam">
                    <div className="adminInternational">
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateY={[
                                '30%',
                                '-40%'
                            ]}
                            opacity={[
                                0,
                                2.5
                            ]}
                        >
                            <div className={size > 800 ? 'subTeam' : size > 500 ? 'smallSubTeam' : 'vSmallSubTeam'}>Admin International Affairs</div>
                        </Parallax>
                        <div className="cardContainer">
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    size > 800 ? '10%' : size > 500 ? '30%' : '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/prachi.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">PRACHI MUKHERJEE</div>
                                        <div className="des">Assistant Manager </div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                    <div className="support">
                        <Parallax
                            className="Parallax-module__smallLinear--MqSo+"
                            translateY={[
                                '30%',
                                '-40%'
                            ]}
                            opacity={[
                                0,
                                2.5
                            ]}
                        >
                            <div className={size > 800 ? 'subTeam' : size > 500 ? 'smallSubTeam' : 'vSmallSubTeam'}>Support Staff</div>
                        </Parallax>
                        <div className="cardContainer">
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    size > 800 ? '10%' : size > 500 ? '30%' : '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/rajanav.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">RAJAN</div>
                                        <div className="des">Executive Assistant (AV Support)</div>
                                    </div>
                                </div>
                            </Parallax>
                            <Parallax
                                className="Parallax-module__smallLinear--MqSo+"
                                translateY={[
                                    size > 800 ? '10%' : size > 500 ? '30%' : '30%',
                                    '-40%'
                                ]}
                                opacity={[
                                    0,
                                    2.5
                                ]}
                            >
                                <div className={size > 800 ? 'card' : size > 500 ? 'smallCard' : 'vSmallCard'}>
                                    <img className="img" src="https://iiitd.ac.in/sites/default/files/images/admin/staff/akhileshav.jpg" alt="" />
                                    <div className="designation">
                                        <div className="name">AKHILESH</div>
                                        <div className="des">Executive Assistant (AV Support)</div>
                                    </div>
                                </div>
                            </Parallax>

                        </div>
                    </div>
                </div>
            </ParallaxBanner>
            <Footer />
        </div >
    )
}

export default AcademicTeam