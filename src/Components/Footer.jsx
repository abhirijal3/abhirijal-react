import { useState } from "react";

const Footer = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const submitForm = (event) => {
        event.preventDefault();
        setBtnLoading(true);
    }

    const renderSubmitButton = () => {
        if (btnLoading) {
            return (
                <button type="submit" className="btn btn-outline-dark btn-submit" style={{ 'whiteSpace': 'nowrap' }} disabled>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Loading...
                </button>
            )
        } else {
            return (
                <button type="submit" className="btn btn-outline-dark btn-submit py-2 px-4" style={{ 'whiteSpace': 'nowrap' }}>
                    SUBMIT
                </button>
            )
        }
    }
    return (
        <div>
            <div className="container-xxl">
                <hr/>
                <div className="row row-cols-1 row-cols-md-2 py-5">
                <div className="col order-md-2">
                        <div className="text-center py-3">
                            <img src="/me2.jpg" alt='Abhi Rijal' className="mb-4 img-fluid rounded-circle mx-auto d-block" style={{ 'width': '200px', 'height': 'auto' }} />
                            <p style={{color: '#2b2b2b'}}>Abhi Rijal</p>
                            <p style={{color: '#1d1d1d4d'}}>abhirijal3@gmail.com</p>
                        </div>
                    </div>
                    <div id="contact" className="col order-md-1">
                        <h2 className="font-manrope fw-900 mb-5">Contact Me</h2>
                        <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-text-box" id="name" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control form-text-box" id="email" placeholder="Email" />
                                </div>
                                <div className="mb-4">
                                    <textarea placeholder="Message" className="form-control form-text-box" id="message" rows="2"></textarea>
                                </div>
                                {renderSubmitButton()}
                            </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light-biege">
                    <p className="mb-0 text-center py-1 font-karla" style={{fontSize: 16}}>Copyright © | Abhi Rijal 2024</p>
            </div>
        </div>
    )
}

export default Footer;