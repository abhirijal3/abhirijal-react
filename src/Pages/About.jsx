import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './HomePage.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='container-xxl about-me' style={{ paddingTop: '80px', paddingBottom: '20px' }}>
                <div>
                    <h1 className="font-manrope fw-bold mt-5" style={{ fontSize: '42px' }}>About Me</h1>
                </div>
                <div className='my-4'>
                    <p>Hi, I'm Abhi Rijal, an aspiring software engineer from the breathtaking Himalayas. I'm currently a Software Engineer Intern at Maptician, Inc.</p>
                    <p>I grew up in Kathmandu, the vibrant capital city of Nepal. My journey into coding began in grade 6 when I created my first simple HTML website. By the age of 16, I had landed my first job, marking the start of my professional adventure.</p>
                    <p>A lifelong learner, I thrive on reflection and improvement. I'm an avid growth seeker who believes in the power of listening, sharing, and connecting with people.</p>
                    <p>In 2021, I embarked on a new chapter, moving from Nepal to the USA to pursue a Bachelor's degree in Computer Science at the University of Nebraska-Lincoln. After my graduation in August 2023, I’m working and rocking as a full-time at Maptician, where I began as an intern.</p>
                    <p>At Maptician, we make work environments smarter and more efficient. My fascination with technology, ignited by my first line of code at age 13, continues to drive my curiosity and passion for innovation.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;