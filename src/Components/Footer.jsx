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
                <hr />
                <div className="row row-cols-1 row-cols-md-2 py-5">
                    <div className="col order-md-2">
                        <div className="text-center py-3">
                            <svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="750 480 1000 1000">
                                <path style={{ 'width': '200px', 'height': 'auto', 'fill': 'var(--black);' }} className="cls-1" d="m1700.11,1212.3l-127.21.35-128.5-222.49-53.47-92.46h98.7c9.31,0,18.14-1.3,26.62-3.77,16.02-4.47,30.27-13.07,41.7-24.5,17.72-17.84,28.63-42.38,28.26-69.65-.71-53.14-45.36-95.25-98.5-95.25h-179.26c-20.06,0-38.71-10.31-49.38-27.3l-36.1-57.5-18.02-28.62h290.24c110.34,0,201.99,88.34,202.45,198.68.23,55.46-22.07,105.72-58.42,141.95-20.73,20.61-45.94,36.87-74.09,46.88l134.98,233.68Z" />
                                <g>
                                    <polygon style={{ 'fill': 'var(--black);' }} points="1318.96 990.16 1194.82 990.16 1136.28 873.67 1115.79 832.8 924.15 1213.83 799.89 1214.07 1053.6 709.25 1115.67 585.93 1136.28 626.8 1177.86 709.49 1215.9 785.22 1272.44 897.7 1318.96 990.16" />
                                    <polygon style={{ 'fill': 'var(--black);' }} points="1060.14 1000.17 1300.52 1212.18 1428.92 1209.19 1373.68 1104.68 1060.14 1000.17" />
                                </g>
                            </svg>
                            {/* <img src="/cg.webp" alt='Abhi Rijal' className="mb-4 img-fluid rounded-circle mx-auto d-block" style={{ 'width': '200px', 'height': 'auto' }} /> */}
                            <p style={{ color: '#2b2b2b' }}>Abhi Rijal</p>
                            <p style={{ color: '#1d1d1d4d' }}>support@abhirijal.com</p>
                        </div>
                    </div>
                    <div id="contact" className="col order-md-1">
                        <h2 className="font-manrope fw-900 mb-5">Contact Us</h2>
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
                <p className="mb-0 text-center py-1 font-karla" style={{ fontSize: 16 }}>Copyright © | Abhi Rijal 2024</p>
            </div>
        </div>
    )
}

export default Footer;