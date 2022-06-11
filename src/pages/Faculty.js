import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax';

const Faculty = () => {

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
        <div className='page' style={{ backgroundColor: " rgb(239, 239, 240)" }}>

            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>For IIITD Faculty</div>
            <div className="rows">

                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '40%',
                        '-20%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}

                >
                    <div className="section">
                        <div className="subHeading">Teaching & Learning</div>
                        <a className="projectLinks" href="https://iiitd.ac.in/iqac">IQAC</a>
                    </div>
                </Parallax>


                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '-5%',
                        '5%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">Important Guidelines</div>
                        <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitdfaculty.html">SOP</a>
                    </div>
                </Parallax>


                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '-40%',
                        '10%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">Academic Regulations</div>
                        <a className="projectLinks" href="https://iiitd.ac.in/academics/resources">Regulations</a>
                    </div>
                </Parallax>
            </div>

            <div className="rows">
                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '20%',
                        '-20%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">Meeting Minutes</div>
                        <a className="projectLinks" href="https://academics.iiitd.edu.in/meetings/list.php">Minutes</a>
                    </div>
                </Parallax>

                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '0%',
                        '-0%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">Important Point of Contact</div>
                        <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitd-acad-team.html">Academic Team</a>
                    </div>
                </Parallax>

                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '-20%',
                        '10%'
                    ]}
                    opacity={[
                        0,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">Awards</div>
                        <a className="projectLinks" href="https://awards.iiitd.edu.in/">Awards</a>
                    </div>
                </Parallax>
            </div>
            <div className="rows">
                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '0%',
                        '-0%'
                    ]}
                    opacity={[
                        0.5,
                        2
                    ]}
                >
                    <div className="section">
                        <div className="subHeading">FAQs</div>
                        <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitdfaculty.html#">FAQ</a>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default Faculty