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
                    <p>Hi, I am Abhi Rijal, an aspiring software engineer all the way form the Himalayas. I am currently a Software Engineer Intern at Maptician, Inc.
                    </p>
                    <p>I grew up in the capital city of Nepal - Kathmandu.</p>
                    <p>I coded my line first of code when I was in grade 6. It was a simple HTML website.</p>
                    <p>I got my first job at the age of 16.</p>
                    <p>I am a lifelong learner and I love to reflect and improve. I am a avid growth seeker and I beleive in listening, sharing and connecting with people.</p>
                    <p>I started my journey at the USA in 2021 when I flew all the way from Nepal to study Bachelor in Computer Science at University of Nebraska-Linoln.</p>
                    <p>Right now, I am looking for full-time opportunties after I graduate in August 2023 (Wohooo!). I am looking for a company which will help me transition into
                        the field of software engineering and teach me to make the right decisions.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;