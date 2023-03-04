const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top px-lg-5 py-lg-4">
                <div className="container">
                    <a className="navbar-brand" href="#">Abhi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item me-lg-4">
                                    <a className="nav-link active font-karla" style={{ 'font-size': '18px' }} aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item mx-lg-4">
                                    <a className="nav-link font-karla" style={{ 'font-size': '18px' }} href="#">About</a>
                                </li>
                                <li className="nav-item mx-lg-4">
                                    <a className="nav-link font-karla" style={{ 'font-size': '18px' }} href="#">Projects</a>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <a className="nav-link font-karla" style={{ 'font-size': '18px' }} href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;