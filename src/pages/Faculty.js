import React from 'react'

const Faculty = () => {
    return (
        <div>
            <div className="heading">For IIITD Faculty</div>
            <div className="rows">

                <div className="section">
                    <div className="subHeading">Teaching & Learning</div>
                    <a className="projectLinks" href="https://iiitd.ac.in/iqac">IQAC</a>
                </div>

                <div className="section">
                    <div className="subHeading">Important Guidelines</div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitdfaculty.html">SOP</a>
                </div>
                <div className="section">
                    <div className="subHeading">Academic Regulations</div>
                    <a className="projectLinks" href="https://iiitd.ac.in/academics/resources">Regulations</a>
                </div>
            </div>

            <div className="rows">
                <div className="section">
                    <div className="subHeading">Meeting Minutes</div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/meetings/list.php">Minutes</a>
                </div>
                <div className="section">
                    <div className="subHeading">Important Point of Contact</div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitd-acad-team.html">Academic Team</a>
                </div>
                <div className="section">
                    <div className="subHeading">Awards</div>
                    <a className="projectLinks" href="https://awards.iiitd.edu.in/">Awards</a>
                </div>
            </div>
            <div className="rows">
                <div className="section">
                    <div className="subHeading">FAQs</div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitdfaculty.html#">FAQ</a>
                </div>
            </div>
        </div>
    )
}

export default Faculty