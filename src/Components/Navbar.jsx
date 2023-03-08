import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top px-lg-5 py-lg-4">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Abhi</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item me-lg-4">
                                <Link className="nav-link active font-karla" style={{ 'font-size': '18px' }} aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item mx-lg-4">
                                <Link className="nav-link font-karla" style={{ 'font-size': '18px' }} to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item mx-lg-4">
                                <Link className="nav-link font-karla" style={{ 'font-size': '18px' }} to={'/projects'}>Projects</Link>
                            </li>
                            <li className="nav-item ms-lg-4">
                                <Link className="nav-link font-karla" style={{ 'font-size': '18px' }} to={'/'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;