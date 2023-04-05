// import { useRef } from 'react';
import Navbar from '../Components/Navbar';
// import ResumeItem from '../Components/ResumeItem';
import './HomePage.css';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='container' style={{ 'padding-top': '120px', 'padding-bottom': '80px' }}>
                <div className=''>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>Contact</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;