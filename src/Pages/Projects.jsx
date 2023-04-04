import Navbar from '../Components/Navbar';
import ProjectCard from '../Components/ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div style={{ 'min-height': '100vh' }}>
            <Navbar />
            <div className='container' style={{ 'padding-top': '120px', 'padding-bottom': '20px' }}>
                <div className='mb-5'>
                    <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>Projects</h2>
                </div>
                <div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gx-lg-5 gy-4'>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;