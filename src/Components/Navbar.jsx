import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation;
    const [isPastElement, setIsPastElement] = useState(false);
    useEffect(() => {
        //Listening for page changes.
        document.body.style = "none";
        // document.body.style.paddingTop = "90px";
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const elementPosition = document.getElementById("main-navbar").offsetTop;
            if (scrollPosition > elementPosition) {
                setIsPastElement(true);
            } else {
                setIsPastElement(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav id="main-navbar" className={`navbar navbar-expand-lg fixed-top px-lg-5 py-lg-4 ${isPastElement ? 'bg-blue' : 'bg-white'}`}>
            <div className="container">
                <Link className={`navbar-brand ${isPastElement ? 'text-white' : ''}`} to={'/'}>Abhi</Link>
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close border-0 shadow-noneborder-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item me-lg-4">
                                <Link className={`nav-link active font-karla ${isPastElement ? 'text-white' : ''}`} style={{ 'fontSize': '18px' }} aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item mx-lg-4">
                                <Link className={`nav-link font-karla ${isPastElement ? 'text-white' : ''}`} style={{ 'fontSize': '18px' }} to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item mx-lg-4">
                                <Link className={`nav-link font-karla ${isPastElement ? 'text-white' : ''}`} style={{ 'fontSize': '18px' }} to={'/projects'}>Projects</Link>
                            </li>
                            <li className="nav-item ms-lg-4">
                                <Link className={`nav-link font-karla ${isPastElement ? 'text-white' : ''}`} style={{ 'fontSize': '18px' }} to={'/'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;