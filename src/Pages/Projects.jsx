import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ProjectCard from '../Components/ProjectCard';
import './Projects.css';

const Projects = () => {
    let projectData = [
        {
            title: "Fast Forward Navigation App",
            thumbnail: "http://via.placeholder.com/640x450",
            category: [
                "FRONTEND",
                "BACKEND",
                "MOBILE"
            ],
            shortTechnology: "React, Node.js, Typescript.",
            longTechnology: "React, Node.js, React Native, TypeScript, AWS.",
            shortDescription: "An engaging and challenging multiplayer game that can be played online.",
            description: "An engaging and challenging multiplayer game that can be played online. Uses UDP protocol for real time communication.",
            images: [
                {
                    alt: "Alt text",
                    url: "url"
                }
            ],
            github: "https://github.com/",
            demo: "https://stage.ff-ai.dev/",
            year: 2023
        }
    ]
    return (
        <div style={{ 'minHeight': '100vh' }}>
            <Navbar />
            <div className='container' style={{ 'paddingTop': '120px', 'paddingBottom': '20px' }}>
                <div className='mb-5'>
                    <h2 className="font-manrope fw-semibold" style={{ 'fontSize': '41px' }}>Projects</h2>
                </div>
                <div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gx-lg-5 gy-4'>
                        {projectData.map((eachProject, index) => {
                            return (<ProjectCard key={index} data={eachProject} />)
                            })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;