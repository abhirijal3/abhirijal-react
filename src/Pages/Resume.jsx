import Navbar from '../Components/Navbar';
import ResumeItem from '../Components/ResumeItem';
import Footer from '../Components/Footer';
import './HomePage.css';
import './Resume.css';

const Resume = () => {
    let schoolData = [
        {
            title: 'Bachelor of Science, Computer Science',
            type: 'school',
            time: 'Full-Time',
            organization: 'University of Nebraska-Lincoln',
            location: 'Lincoln, NE',
            date: 'Aug 2021 - Aug 2023',
            description: [
            ],
            skills: "Data Structures & Algorithms, Software Engineering, Deep Learning, Operating Systems & Kernels.",
        },
    ];
    const resumeData = [
        {
            title: 'Software Engineer',
            type: 'work',
            time: 'Full-Time',
            organization: 'Maptician, Inc.',
            location: 'Washington, D.C.',
            date: 'May 2023 - Present',
            description: [
                'Developed and maintained full-stack JavaScript applications for conference room management, utilizing HTML, CSS, and vanilla JavaScript on the frontend and Node.js with MongoDB on the backend.',
                'Implemented and managed room/seat booking features, ensuring a seamless and user-friendly experience for clients, including integration of specific services during reservations.',
                'Set up and maintained notification lists for various services related to room reservations, enhancing the efficiency and responsiveness of the booking system.',
                'Followed best practices in coding and project management, using promise chains instead of async/await, and adhering to camelCase variable naming and snake_case function naming conventions to maintain code consistency and readability.'
            ],
            skills: "JavaScript, Node.js, AWS, MongoDB, PWA, Azure"
        },
        {
            title: 'Software Engineering Intern',
            type: 'work',
            time: 'Part-Time',
            organization: 'Maptician, Inc.',
            location: 'Lincoln, NE',
            date: 'Jan 2023 - May 2023',
            description: [
                "Accelerate the map creation process by 20% by engineering algorithms to automatically find the boundaries of polygon in a 2D shape and using profiling tools to speedup code execution.",
                "Develop RESTful APIs using Express.js and MongoDB for a progressive web app used by 40,000+ users daily.",
                "Participate in sales meetings due to the ability to effectively prioritize and translate user needs into software solutions.",
                "Test and document REST APIs in OpenAPI v3.0 format to ensure quality and to provide a standardized format for clients."
            ],
            skills: "Node.js, jQuery, Express.js, AWS, MongoDB."
        },
        {
            title: 'Full-Stack Developer',
            type: 'work',
            time: 'Part-Time',
            organization: 'Student Affairs, University of Nebraska–Lincoln',
            location: 'Remote',
            date: 'Apr 2022 - Aug 2023',
            description: [
                "Refactor the codebase for a RESTful API backend running Python Django, MySQL, and Docker and add caching via Redis middleware improving TTFB by 30% and reducing user bounce rate by 15%.",
                "Improve code inefficiencies for an Drupal events web application, reducing load time from 4.1s to 0.8s.",
                "Design responsive and user-friendly webpages adhering to WCAG guidelines with a 100% client satisfaction rate."

            ],
            skills: "Python, Django, JavaScript, Drupal, HTML, CSS"
        },
        {
            title: 'Web Application Programmer',
            type: 'work',
            time: 'Part-Time',
            organization: 'University Communications & Marketing, University of Nebraska–Lincoln',
            location: 'Lincoln, NE',
            date: 'Nov 2021 - May 2023',
            description: [
                "Reduce operation cost by $50,000 yearly by creating a software to automatically caption user videos using OpenAI whisper.",
                "Lead the development of a web application that generates images in 30 different formats for use throughout the University.",
                "Collaborate with developers, designers, and system engineers to support the development of 6+ software projects."
            ],
            skills: "Python, PHP, C++, Linux, MySQL, Laravel, Agile SCRUM"
        },
        {
            title: 'Web Application QA Tester Intern',
            type: 'work',
            time: 'Part-Time',
            organization: 'University of Nebraska System',
            location: 'Lincoln, NE',
            date: 'Aug 2022 - Jan 2023',
            description: [
                "Decreased QA testing time from 5 hours to 30 mins by integrating OWASP Zap docker image into the CI/CD pipeline.",
                "Wrote automation test code for 3 key projects using Python’s unittest framework accelerating software releases.",
                "Documented assigned projects and systems meticulously to streamline existing deployment & QA procedures."

            ],
            skills: "Python, CI/CD, DevOps, Selenium, Postman, OWASP ZAP"
        },
        {
            title: 'Software Developer',
            type: 'work',
            time: 'Part-Time',
            organization: 'Kathmandu International Mountain Film Festival',
            location: 'Kathmandu, NP',
            date: 'Apr 2019 - Apr 2022',
            description: [
                "Built scalable full-stack web application for streaming 60+ films without buffering to a global audience of 12,000+ users.",
                "Implemented a new responsive website layout increasing user interactivity by 30% and mobile users by 50%.",
                "Automated the process of converting user-submitted videos into web-ready H.264 format using Python flask on AWS."
            ],
            skills: "Python, WordPress, AWS, Linux, MySQL"
        },
    ];
    return (
        <div>
            <Navbar />
            <div className="container" style={{ 'paddingTop': '120px', 'paddingBottom': '80px' }}>
                <h1 className="fw-semibold text-center" style={{ 'fontSize': '41px' }}>Work Experience</h1>
                {resumeData.map((resume, index) => <div key={resume.title}>
                <div className='text-center' style={{paddingTop: 60, paddingBottom: 60}}>
                    <hr className='resume_seperator'/>
                    <div className='resume_date py-2 px-3 d-inline-block'>{resume.date}</div>
                </div>
                    <div className="row p-3">
                    <div className="col-12 col-md-4 offset-md-1">
                        <div className='d-flex align-items-center mb-3'>
                            <h3 className='skill_title mb-1 me-2'>{resume.title}</h3>
                            <span class="badge resume_time">{resume.time}</span>
                        </div>
                                <div className='d-inline-block me-3'>
                                    {/* <svg className='me-1' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                                    <i className={'fa-solid fa-building me-2'}></i>
                                    <span className='font-manrope fw-semibold text-gray' style={{ 'fontSize': '14px' }}>{resume.organization}</span>
                                </div>
                                <div className='d-inline-block'>
                                    {/* <svg className='me-1' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                                    <i className="fa-solid fa-location-dot me-1"></i>
                                    <span className='font-manrope fw-semibold text-gray' style={{ 'fontSize': '14px' }}>{resume.location}</span>
                                </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <ul>
                            {(resume.description || []).map((desc, index) => <li key={index} className='skill_desc mb-3'>{desc}</li>)}
                        </ul>
                        <p className='mb-0'>
                            <strong>Skills:</strong> {resume.skills}
                        </p>
                    </div>
                </div>
                {/* {(index < (resumeData.length -1)) ? 
                <div style={{paddingTop: 60, paddingBottom: 60}}>
                    <hr/>
                </div> : ''} */}
                
                </div>)}
                <div className='text-center' style={{paddingTop: 60, paddingBottom: 60}}>
                    <hr className='resume_seperator'/>
                </div>
                <div className='offset-md-1'>
                        <h2 className="font-manrope fw-semibold" style={{ 'fontSize': '41px' }}>Education</h2>
                    {schoolData.map((schoolItem) => {
                        return (<div key="{schoolItem}"><ResumeItem data={schoolItem} /></div>)
                    })}
                </div>
            </div>
            {/* <div className='container' style={{ 'paddingTop': '120px', 'paddingBottom': '80px' }}> */}
                {/* <h4 className='text-center'><button className='btn btn-dark font-karla bg-black'>Resume <i class="fa-solid fa-download ms-2"></i></button></h4> */}
                {/* <div className=''>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'fontSize': '41px' }}>Work Experience</h2>
                    </div>
                    <div>
                        {resumeData.map((resumeItem, index) => <ResumeItem key={index} data={resumeItem}/>)}
                    </div>
                </div>
                <div className='my-5'>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'fontSize': '41px' }}>Education</h2>
                    </div>
                    {schoolData.map((schoolItem) => {
                        return (<div key="{schoolItem}"><ResumeItem data={schoolItem} /></div>)
                    })}
                </div> */}
            {/* </div> */}
            <Footer/>
        </div>
    );
}

export default Resume;