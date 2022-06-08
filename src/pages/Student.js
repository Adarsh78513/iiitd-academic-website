import React from 'react'
import '../styles/Student.css'

const Student = () => {
    return (
        <div>
            <div className="heading">Students</div>
            <div className="rows">

                <div className="section">
                    <div className="subHeading"><u>New Students</u></div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitd-acad-team.html">Primary Contact</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/beforeyouarrive.html">Before you arrive</a>
                    <a className="projectLinks" href="http://online.fliphtml5.com/npkwf/zpfc/#p=1">Student Handbook</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>Accademic Matters</u></div>
                    <a className="projectLinks" href="https://iiitd.ac.in/academics/resources">Regulations</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Teaching%20and%20Evaluation.pdf">Examination & Assessment</a>
                    <a className="projectLinks" href="https://iiitd.ac.in/life/discipline-grievance/disciplinary-action">Student Conduct</a>
                    <a className="projectLinks" href="hhttps://iiitd.ac.in/academics/issue-resolution">Complaints & acad Appeals</a>
                    <a className="projectLinks" href="https://iiitd.ac.in/form_docs">Forms</a>
                    <a className="projectLinks" href="https://iiitd.ac.in/academics/resources/acad-dishonesty">Academic Dishonesty</a>

                </div>

                <div className="section">
                    <div className="subHeading"><u>Fees & Funding </u></div>
                    <a className="projectLinks" href="https://iiitd.ac.in/admission/fees">Course Fee</a>
                    <a className="projectLinks" href="https://iiitd.ac.in/admission/scholarships">Scholarships (UG & PG)</a>
                    <a className="projectLinks" href="https://awards.iiitd.edu.in/">Prizes & Awards</a>
                    <a className="projectLinks" href="https://payments.iiitd.edu.in/pg/studentsfee/">Fee Portal</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Travel%20Assistance%20to%20BTech%20and%20MTech%20Students.pdf">Travel Assistance</a>
                </div>
            </div>

            <div className="rows">
                <div className="section">
                    <div className="subHeading"><u>Graduation & Leaving IIIT-D</u></div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Graduation%20Requirements%20and%20Award%20of%20Degree.pdf">Graduation Requirement</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Issue%20of%20Transcript%20&%20Degree.pdf">Accademic Transcript & Degree</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/Leaving%20IIIT-D.pdf">Preparing to leave</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>Further Studies</u></div>
                    <a className="projectLinks" href="https://iiitd.ac.in/sites/default/files/docs/education/2021/2021%20January-%20Dual%20Degree%20Regulations_Final.pdf">Dual Degree(B.Tech. & M.Tech.)</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/iiitdstudents.html#">B.Tech. to Ph.D.</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/docs/MTech%20to%20PhD.pdf">M.Tech. to Ph.D.</a>
                </div>

                <div className="section">
                    <div className="subHeading"><u>FAQ</u></div>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/faq-all.html">Ph.D.</a>
                    <a className="projectLinks" href="https://academics.iiitd.edu.in/faq-all.html">M.Tech.</a>
                    <a className="projectLinks" href="https://docs.google.com/spreadsheets/d/1w85BGovNseeoUiKojVfF8NYx4NBOw_5UfrIc6ALt4Yo/edit#gid=1213820881">B.Tech.</a>
                </div>
            </div>
        </div>
    )
}

export default Student