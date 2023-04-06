// import { useRef } from 'react';
import Navbar from '../Components/Navbar';
// import ResumeItem from '../Components/ResumeItem';
import './HomePage.css';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='container' style={{ 'padding-top': '120px', 'padding-bottom': '80px' }}>
                <div className='mb-4'>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>Contact</h2>
                    </div>
                </div>
                <div className='row row-cols-2'>
                    <div>
                        <h5>You can contact me on:</h5>
                        <p>abhirijal3@gmail.com</p>

                        <h5>My socials</h5>
                        <p>abhirijal3@gmail.com</p>
                    </div>
                    <div className='bg-light-biege p-5 rounded-5'>
                        <h3 className='text-center mb-5 font-karla'>Contact form</h3>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary bg-red border-red font-manrope rounded-pill fw-bold py-3 text-left" style={{ 'whiteSpace': 'nowrap' }}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;