import React, { useState, useEffect } from 'react'
import '../styles/FAQ.css'

const Faq = () => {
    const [size, setSize] = useState(window.innerWidth)
    const [registration, setRegistration] = useState(true)
    const [specialisation, setSpecialisation] = useState(false)
    const [thesis, setThesis] = useState(false)
    const [intern, setIntern] = useState(false)
    const [graduation, setGraduation] = useState(false)
    const [operation, setOperation] = useState(false)

    const switchBar = (e, button) => {
        if (button === "registration") {
            setRegistration(true);
            setGraduation(false);
            setIntern(false);
            setOperation(false);
            setThesis(false);
            setSpecialisation(false);
        }
        if (button === "specialisation") {
            setSpecialisation(true);
            setGraduation(false);
            setIntern(false);
            setOperation(false);
            setThesis(false);
            setRegistration(false);
        }
        if (button === "thesis") {
            setThesis(true);
            setGraduation(false);
            setIntern(false);
            setOperation(false);
            setSpecialisation(false);
            setRegistration(false);
        }
        if (button === "intern") {
            setIntern(true);
            setGraduation(false);
            setThesis(false);
            setOperation(false);
            setSpecialisation(false);
            setRegistration(false);
        }
        if (button === "graduation") {
            setGraduation(true);
            setIntern(false);
            setThesis(false);
            setOperation(false);
            setSpecialisation(false);
            setRegistration(false);
        }
        if (button === "operation") {
            setOperation(true);
            setIntern(false);
            setThesis(false);
            setGraduation(false);
            setSpecialisation(false);
            setRegistration(false);
        }
    }
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
            <div>
                <button onClick={(e) => { switchBar(e, "registration") }}>Course & Registration </button>
                <button onClick={(e) => { switchBar(e, "specialisation") }}>Specialization </button>
                <button onClick={(e) => { switchBar(e, "thesis") }}>Thesis/SP/ CapP </button>
                <button onClick={(e) => { switchBar(e, "intern") }}>Internship</button>
                <button onClick={(e) => { switchBar(e, "graduation") }}>Graduation Requirement</button>
                <button onClick={(e) => { switchBar(e, "operation") }}>Operational</button>
            </div>

            <div>
                {registration ?
                    <div id='cr'>
                        <h3>Course & Registration</h3>
                        <div className='que'>
                            <ol>
                                <li>How should we plan for taking courses? <br />
                                    Should consult the concerned program coordinator before pre-registration</li>
                                <li>If we wish to take two courses, however in the time table both the courses are clashing, whom should we request?<br />
                                    Student Senate</li>
                                <li>If a few important courses are not offered, however these courses satisfy the core/bucket or specialization requirement, whom should we request to explore the possibility of offering the course?<br />
                                    HOD of respective Department; You can just request and not demand for offering a course as offering of course depends on many other aspects</li>
                                <li>Are we allowed to register IP and IS together in a semester?<br />
                                    Allowed</li>
                                <li>Are we allowed to register IP/IS under visiting Faculty?<br />
                                    Allowed) </li>
                                <li>Are we allowed to register IP/IS under Guest Faculty?<br />
                                    Allowed only when the Guest faculty is taking a course in the same semester</li>
                                <li>Are we allowed to register IP/IS under Adjunct Faculty?<br />
                                    No</li>
                                <li>Can we give improvement exam in courses?<br />
                                    Yes, by registering the course again in the subsequent semesters and then appearing for the exam)  </li>
                                <li>When can we replace a course?<br />
                                    Any time after publication of results of a particular semester, provided it doesn’t result in under load</li>
                                <li>How many credits a student should have registered to be eligible to replace a course?<br />
                                    If the student has done additional courses over & above normal load i.e. 12 credits of courses including IP/IS in a semester with pass grade (other than Thesis/SP, OOPD, RM & TA load</li>
                                <li>What does replacement of a course means?<br />
                                    Replacement means the courses which are replaced will not be counted in CGPA, however will be shown in the transcript</li>
                                <li>How do we request to replace a course after publication of results?<br />
                                    Fill the form available on our website and submit it to admin-mtech</li>
                                <li>How do we request to replace a course at the time of graduation, after completion of all my credits?<br />
                                    There is a provision in graduation requirement form, you need to mention the courses which you have replaced earlier along with a fresh  course/s, if any</li>
                                <li>Is it mandatory to replace a course if we have done additional courses?<br />
                                    (No, it is upto the student; if we do  not get any request from the students, all the courses done will be counted towards CGPA</li>
                                <li>Can we replace core course in a specialization?<br />
                                    Allowed, only with a core course</li>
                                <li>Can we replace specialization elective?<br />
                                    Allowed, only with a specialization elective</li>
                                <li>Are we allowed to replace a regular in-class course with IP/IS?<br />
                                    No</li>
                                <li>Are we allowed to do online courses? If yes, then how?<br />
                                    [Yes, but only as Independent study (IS)]</li>
                                <li>Where can we find the description of courses?<br />
                                    IIITD Website <a href="https://www.iiitd.ac.in/academics/courses" target="_blank">https://www.iiitd.ac.in/academics/courses</a> & <a href="http://techtree.iiitd.edu.in/" target="_blank">http://techtree.iiitd.edu.in</a> </li>
                                <li>Are we allowed registering SSH or courses of other departments?<br />
                                    Yes</li>
                                <li>When can we take IP/IS?<br />
                                    Any term as far as the guide/advisor allows</li>
                                <li>When and how taking overload is allowed in each semester?<br />
                                    Overload is allowed after 1st semester if CGPA{'>'}=8</li>
                                <li>Do we need to take approval for overload if our CGPA{'>'}= 8?<br />
                                    No, sometimes ERP does not allow due to semester limit; in that case just email admin-mtech to increase the credit limit of your batch for that semester</li>
                                <li>Is it necessary to complete the bucket courses in first year only?<br />
                                    It is advisable to complete specialization and bucket courses requirement as early as possible,</li>
                                <li>Does IP/IS have to be from the same domain as the specialization?<br />
                                    Not necessary</li>
                                <li>Can the projects (IP/IS) be done in groups?<br />
                                    It depends upon the guide/advisor </li>
                                <li>Can we sit through a course and not register it on ERP?<br />
                                    Yes, you can with the permission of Instructor</li>
                                <li>How can we register a course as Audit?<br />
                                    Course registration is done through ERP and there is provision of registering a course as Audit or Credit on ERP</li>
                                <li>Are we allowed to convert a course registration from audit to credit or vice versa?<br />
                                    No</li>
                                <li>What is late drop?<br />
                                    Late drop is related to dropping a course in between a semester i.e.  generally, after Mid-Sem, however a late dropped course will show in your transcript with a grade "W". This is just to facilitate a student where the student is not able to cope up with a course. A student can request for late drop within the late drop period only as per the dates announced in the academic calendar</li>
                                <li>What is Project Registration?<br />
                                    This is an additional registration process for registration of IP/IS/Thesis/CapP/SP; these are project based learning courses where you have to register with a faculty advisor. This is done under the project module tab on ERP. After you register the credits in registration tab, proceed for project registration. This is the responsibility of the student to ensure that the project is approved by the faculty</li>
                                <li>If we are working on a Thesis/CapP/SP which is continued from last semester; do we still have to do the project registration?<br />
                                    Yes, after registering the credits in multiples of 4, go to project module and extend the same topic from previous/last semester</li>
                                <li>How does the summer registration happen?<br />
                                    It is the same process like a regular semester where pre-registration, registration, project registration is done in ERP. The time table and academic calendar are also announced  similar to a regular semester</li>
                                <li>If a course has pre-requisites which as  M.Tech. students we have not completed here at IIITD, however we have required background from our previous institute; how to proceed for registration?<br />
                                    Contact your instructor and seek his/her approval to register for this</li>
                                <li>We are not able to register few courses which are visible in ERP?<br />
                                    Some courses are flagged as "Popular courses", which a student can’t register from his/her login. Necessary information regarding additions if allowed in the course will be sent to the students for such courses and in that case, the student need to email admin-mtech showing the interest for registration</li>
                                <li>There is a lack of IP/Cap under most of the professors and hence we are unable to complete the internship requirement of 32 credits until summer term. Whom to approach?<br />
                                    Approach the respective HOD</li>
                                <li>Are there any credits for doing internship?<br />
                                    No</li>
                                <li>Can we register for a course or project while on an internship?<br />
                                    No, before going for internship, one has to complete graduation requirements</li>
                            </ol>
                        </div>
                    </div> : null}
                {specialisation ?
                    <div id='spz'>
                        <h3>Specialization</h3>
                        <div className='que'>
                            <ol>
                                <li>Where can we find the specialization requirements?<br />
                                    IIITD Website; go through the Specific regulations of CSE & ECE & CB and the  specialization pages for the specialization courses</li>
                                <li>Can we switch between program i.e. M.Tech. (CSE) to M.Tech. (ECE) / M.Tech (CB) or vice versa?<br />
                                    No</li>
                                <li>If we are doing  Thesis/SP in a domain other than our specialization, then are we eligible for that specialization ?<br />
                                    No</li>
                                <li>If we are not opting for Thesis/SP/CapP, are we eligible for specialization? <br />
                                    Not for all porgrams, allowed only in ECE (CPS & ML) </li>
                                <li>Can AI specialization student obtain the without specialization degree by doing general core courses buckets?<br />
                                    Yes, check the regulations for details</li>
                                <li>Can one course fulfill both specialization and bucket requirements? <br />
                                    Yes, if it is in both buckets. Credits will be considered once only; except for M.Tech CSE-AI</li>
                            </ol>
                        </div>
                    </div> : null}
                {thesis ?
                    <div id='tsc'>
                        <h3>Thesis/SP/ CapP </h3>
                        <div className='que'>
                            <ol>
                                <li>Can we switch between Thesis/ SP? <br />
                                    Conversion of SP to Thesis and vice versa is allowed</li>
                                <li>What is the process of conversion of Thesis to SP and vice versa? <br />
                                    By sending an email to admin-mtech with the approval of supervisor</li>
                                <li>What will happen to the registered credits with grades of Thesis if it is converted to SP? <br />
                                    All the credits will be shown in your transcript, only a note will be mentioned in the footnote that "Student has converted from Thesis to SP"</li>
                                <li>Is internal guide necessary when registering with an Adjunct faculty? <br />
                                    Yes, when registering afresh. However, if a faculty left the institute after registration, internal guide is not necessary</li>
                                <li>Are we allowed to register for Thesis/ SP/ CapP during the internship? <br />
                                    No</li>
                                <li>How can we change our supervisor? <br />
                                    Yes, by filling the Supervisor Change Form</li>
                                <li>Can we register Thesis after Capstone project or vive versa? <br />
                                    Yes, with approval from AAC. However, earned credit will not be transferred</li>
                                <li>Do the grades of both Thesis & Capstone calculated in CGPA, if we consider only Thesis as a part of graduation requirement? <br />
                                    Yes</li>
                                <li>Is there any deadline for Thesis defense and submission of report for SP/ IndP/ CapP? <br />
                                    As per Academic Calendar & guidelines</li>
                                <li>How can we opt for Capstone Project? <br />
                                    You need to search on your own, approach IIITD faculty member with mutual research interest</li>
                                <li>When an "I" grade in Thesis is to be converted to "S/X"? <br />
                                    One month after the completion of the semester</li>
                                <li>How is the grading done for Thesis/CapP/SP. <br />
                                    <a href="https://iiitd.ac.in/academics/resources" target="_blank">Refer the Thesis/SP evaluation guidelines</a></li>
                                <li>Do we need to tell beforehand which option (with thesis or without thesis) are we choosing? <br />
                                    It is implied as you are doing the registration in ERP</li>
                                <li>Can we only register for projects (IP/IS/Thesis/CapP/SP) and not any course in a semester? <br />
                                    Yes, but it is advisable that utmost care must be taken while you take these project in your 1st  and 2nd semester; for degree you need to complete your course work as well i.e. your bucket/core and specialization courses </li>
                                <li>Can projects (Thesis/CapP/SP) be done in groups? <br />
                                    Depends on the supervisor; only in case of Thesis the work can't be defended together, hence the project work need to be distributed properly so that two students will have two different title and defend the thesis separately</li>
                                <li>Are we allowed to opt for Thesis and Capstone in a semester? <br />
                                    No</li>
                            </ol>
                        </div>
                    </div> : null}
                {intern ?
                    <div id='internship'>
                        <h3>Internship</h3>
                        <div className='que'>
                            <ol>
                                <li>How can we go for an internship? <br />
                                    There is a detailed guideline for Internship available <a href="https://iiitd.ac.in/academics/resources" target="_blank">on our website</a></li>
                                <li>What is student interaction? <br />
                                    Interaction with program coordinators/Admin Academics to discuss about course registration, graduation requirements etc.</li>
                                <li>Can a GATE admit drop TAship? <br />
                                    TAship is mandatory for GATE admits</li>
                                <li>Is there a minimum requirement of course work? <br />
                                    Yes, see the regulations for details</li>
                                <li>Is there any maximum credits limit that can be registered in whole M.Tech program? <br />
                                    No</li>
                                <li>Are we eligible to get the degree if we got an X in TAship? <br />
                                    Yes, but not eligible for Internship</li>
                                <li>Are we eligible to get t the degree if we  drop TAship? <br />
                                    Yes, but not be eligible for Internship</li>
                                <li>Are we allowed to sit for FTE placement roles if we drop TAship? <br />
                                    Yes</li>
                                <li>Are we allowed to sit for FTE placement roles if we get an X in TAship? <br />
                                    Yes</li>
                            </ol>
                        </div>
                    </div> : null}
                {graduation ?
                    <div id='gr'>
                        <h3>Graduation Requirement </h3>
                        <div className='que'>
                            <ol>
                                <li>What is the credit requirement for M.Tech Degree? <br />
                                    48 Credit, see regulations for details</li>
                                <li>What is the minimum CGPA requirement for graduation? <br />
                                    6.5</li>
                                <li>Are we allowed to do more credit than the minimum requirement? <br />
                                    Yes</li>
                                <li>What is the maximum time to complete M.Tech. Degree? <br />
                                    No Upper Limit</li>
                                <li>Does 300-400 level courses get counted towards 48 credits requirement for all specialization? <br />
                                    Yes, up to certain limit, read the regulation to know the limit</li>
                                <li>In case of plagiarism/F/low cgpa in a course, is it required to re-take that course for improvement? <br />
                                    Not necessary, but you have to  fulfill all the requirements</li>
                                <li>If we have completed the credit requirement, however only thesis defense is pending; what should we register in a semester? <br />
                                    Register the course Thesis/SP/CaPP Progress</li>
                            </ol>
                        </div>
                    </div> : null}
                {operation ?
                    <div id='opr'>
                        <h3>Operational </h3>
                        <div className='que'>
                            <ol>
                                <li>Where can we get Identity Card/ Access Card? <br />
                                    Contact Admin-M.Tech</li>
                                <li>How to get email id login and password? <br />
                                    Approach Admin-M.Tech</li>
                                <li>What is the minimum SGPA/CGPA to avail Stipend? <br />
                                    6.0</li>
                                <li>What is the minimum SGPA/CGPA to continue the program? <br />
                                    6.0</li>
                                <li>How can we reset our password of Email id? <br />
                                    Approach IT Help Desk; <a href="mailto:it-helpdesk@iiitd.ac.in" >it-helpdesk@iiitd.ac.in</a></li>
                                <li>How to get ERP login ID & Password? <br />
                                    Approach Admin-M.Tech</li>
                                <li>How can we reset our password of ERP? <br />
                                    Clink on the forgot password link available on the home page of ERP</li>
                                <li>Where to apply for internet access? <br />
                                    Approach IT Help Desk; <a href="mailto:it-helpdesk@iiitd.ac.in" >it-helpdesk@iiitd.ac.in</a></li>
                                <li>What is the basis of hostel allotment? <br />
                                    Depends upon availability, for more info contact Student Affairs office</li>
                                <li>Are we (Day Scholar) allowed in Hostel during examination? <br />
                                    Upon prior approval & Availability; contact student affair office</li>
                                <li>How to get transcript & other certificate? <br />
                                    Approach Admin-M.Tech</li>
                                <li>How to get bonafide certificate? <br />
                                    Approach Admin-M.Tech</li>
                                <li>When can we get a provisional certificate? <br />
                                    Approach Admin-M.Tech</li>
                                <li>Is there any certificate given for TAship as Experience? <br />
                                    It will be mentioned in your Transcript, however, a certificate may be issued upon your request)</li>
                                <li>What is the procedure of withdrawal? <br />
                                    Approach Admin-M.Tech</li>
                                <li>Do we have to pay the semester fees during internship? <br />
                                    Yes if any installment is left, there is fixed time line for payment of fees</li>
                                <li>What is the process left after Thesis Defense and Submission of report? <br />
                                    You need to complete other administrative formalities which will be informed by admin-mtech</li>
                                <li>What is the leave policy for M.Tech student?<br />
                                    30 days per year, refer regulations for more details</li>
                                <li>Do the student without TAship/RA/Fellow need 75% attendance? <br />
                                    No</li>
                                <li>How many leave are we allowed?<br /> 30 days per year</li>
                                <li>What is the maximum period of semester leave? <br />
                                    Maximum of two semester, subject to the approval of the competent authority</li>
                                <li>What is digital attendance? <br />
                                    Attendance taken through Wi-Fi registering the MAC id of Mob or Laptop or through Biometric; depending on the availability of technology in the institute</li>
                                <li>What is AICTE-DBT? <br />
                                    Payment of M.Tech stipend directly from AICTE</li>
                                <li>How can we become a member of  student council/Student Senate? <br />
                                    Apply when student council/student senate nominations are rolled out</li>
                                <li>Is there any specific credit requirement to be eligible for placement drive? <br />
                                    Consult Training and Placement for more clarification</li>
                                <li>Is there any specific CGPA requirement to be eligible for placement drive? <br />
                                    Contact Training and Placement for more clarification</li>
                            </ol>
                        </div>
                    </div> : null}
            </div>
        </div>
    )
}

export default Faq