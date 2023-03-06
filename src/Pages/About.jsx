import Navbar from '../Components/Navbar';
import './HomePage.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='container' style={{ 'padding-top': '80px', 'padding-bottom': '20px' }}>
                <div>
                    <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>About Me</h2>
                </div>
                <div className='my-4'>
                    <p>Hi, I am Abhi Rija. A fullstack developer.</p>
                </div>
            </div>
            <div className='container' style={{ 'padding-bottom': '80px' }}>
                <div className='w-75'>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>Education</h2>
                    </div>
                    <div className='my-4'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <div>
                                    <span className='font-karla fw-bold' style={{ 'font-size': '23px' }}>Bachelors in Science, Computer Science</span>

                                </div>
                                <div className='d-flex'>
                                    <div className='d-flex me-3'>
                                        <svg className='me-1' fill="#000000" width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z"></path></g></svg>
                                        <span className='font-manrope fw-semibold' style={{ 'font-size': '16px' }}>University of Nebraska-Lincoln</span>
                                    </div>
                                    <div className='d-flex'>
                                        <svg className='me-1' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        <span className='font-manrope fw-semibold' style={{ 'font-size': '16px' }}>Lincoln, NE</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className='badge text-bg-success'>Full time</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-75 my-5'>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>Work Experience</h2>
                    </div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className='my-4'>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <div>
                                                    <span className='font-karla fw-bold' style={{ 'font-size': '23px' }}>Bachelors in Science, Computer Science</span>

                                                </div>
                                                <div className='d-flex'>
                                                    <div className='d-flex me-3'>
                                                        <svg className='me-1' fill="#000000" width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z"></path></g></svg>
                                                        <span className='font-manrope fw-semibold' style={{ 'font-size': '16px' }}>University of Nebraska-Lincoln</span>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <svg className='me-1' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                        <span className='font-manrope fw-semibold' style={{ 'font-size': '16px' }}>Lincoln, NE</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className='badge text-bg-success'>Full time</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;