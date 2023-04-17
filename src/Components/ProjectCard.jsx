const ProjectCard = ({ data }) => {
    const arayToString = (array) => {
        let tempString = "";
        array.map((elem) => tempString = tempString + ", " + elem)
        return tempString.slice(2)
    }
    return (
        <div className="rounded-5">
            <div className="card border-0 rounded-5 shadow-lg">
                <div className="card-body p-4 rounded-5">
                    <div className='mb-3'>
                        <img src={data.thumbnail} className="card-img-top rounded-5" alt={data.title} />
                    </div>
                    <div className='mb-1'>
                        <span className='fw-bold text-red' style={{ 'fontSize': '13px' }}>{arayToString(data.category)}</span>
                    </div>
                    <div className='mb-3'>
                        <h3 className="font-manrope fw-bold">{data.title}</h3>
                    </div>
                    <p className="card-text font-karla" style={{ 'fontSize': '16px' }}>{data.shortDescription}</p>
                    <p className='mb-3'>
                        <span className='fw-bold font-karla me-1'>Technologies used:</span><span className='font-karla'>{data.shortTechnology}</span>
                    </p>
                    <div>
                        <p className='d-flex align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ 'cursor': 'pointer' }}>
                            <span className='font-manrope fw-bold me-3' style={{ 'textDecoration': 'underline' }}>See project</span>
                            <i class="fa-solid fa-arrow-right text-red"></i>
                        </p>
                    </div>
                </div>
            </div>

            <div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content border-0">
                            <div className="modal-body rounded-3 border-0 p-lg-4">
                                <div className="row row-cols-2">
                                    <div>
                                        <div id="carouselExampleIndicators" className="carousel slide">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="https://placehold.co/600x400" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://placehold.co/600x400" className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://placehold.co/600x400" className="d-block w-100" alt="..." />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className="font-manrope fw-bold mb-0">{data.title} <span className='fw-bold' style={{ 'fontSize': '16px' }}>({data.year})</span></h2>
                                        </div>
                                        <div className='mb-3'>
                                            <span className='fw-bold text-red' style={{ 'fontSize': '13px' }}>{arayToString(data.category)}</span>
                                        </div>
                                        <div className="mb-3">
                                            {(data.github) ? <a href={data.github} className="btn btn-dark font-karla me-3"><i className="fa-brands fa-github me-2" style={{ color: '#ffffff' }}></i>GitHub</a> : ""}
                                            {(data.demo) ? <a href={data.demo} className="btn btn-light font-karla me-3"><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Demo</a> : ""}
                                        </div>
                                        <div className="mb-2">
                                            <p className="card-text font-karla" style={{ 'fontSize': '17px' }}>{data.description}</p>
                                        </div>
                                        <div>
                                            <p className='mb-0'>
                                                <span className='fw-bold font-karla me-1'>Technologies used:</span><span className='font-karla'>{data.longTechnology}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;