import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './HomePage.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='container-xxl about-me' style={{ paddingTop: '80px', paddingBottom: '20px' }}>
                <div>
                    <h1 className="font-manrope fw-bold mt-5" style={{ fontSize: '42px' }}>About Us</h1>
                </div>
                <div className='my-4'>
                    <p>Welcome to the future of gaming in Nepal! Our mission is to bring high-performance cloud gaming to gamers across the country, breaking hardware barriers and redefining how games are experienced.</p>
                    <p>Founded with a passion for innovation and gaming excellence, we aim to make world-class gaming accessible to everyone, from the bustling streets of Kathmandu to the serene mountain towns of the Himalayas.</p>
                    <p>Our platform allows gamers to stream and play their favorite titles without the need for high-end devices. Whether you're on a laptop, smartphone, or tablet, you can dive into immersive gameplay instantly.</p>
                    <p>We believe that gaming is more than just entertainment—it’s a way to connect, compete, and create. That’s why our technology is designed to offer low latency, high resolution, and an unparalleled gaming experience, even on limited internet connections.</p>
                    <p>Join us as we transform Nepal’s gaming landscape, providing cutting-edge cloud technology and limitless adventures for gamers of all ages and skill levels.</p>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default About;