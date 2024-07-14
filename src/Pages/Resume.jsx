import Navbar from '../Components/Navbar';
import ResumeItem from '../Components/ResumeItem';
import Footer from '../Components/Footer';
import './HomePage.css';

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
            date: 'Apr 2022 - Present',
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
            date: 'Nov 2021 - Present',
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
            <div className='container' style={{ 'paddingTop': '120px', 'paddingBottom': '80px' }}>
                <h4 className='text-center'><button className='btn btn-dark font-karla bg-black'>Resume <i class="fa-solid fa-download ms-2"></i></button></h4>
                <div className=''>
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
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Resume;