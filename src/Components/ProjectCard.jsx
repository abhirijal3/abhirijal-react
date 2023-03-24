const ProjectCard = () => {
    return (
        <div>
            <div class="card border-0 rounded-5 shadow-lg">
                <div class="card-body p-4">
                    <div className='mb-4'>
                        <img src="http://via.placeholder.com/640x450" class="card-img-top rounded-5" alt="..." />
                    </div>
                    <div className='mb-2'>
                        <span className='fw-bold text-red' style={{ 'font-size': '13px' }}>FRONTEND, BACKEND</span>
                    </div>
                    <div className='mb-4'>
                        <h3 class="font-manrope fw-bold">Lockups Generator</h3>
                    </div>
                    <p class="card-text font-karla" style={{ 'font-size': '16px' }}>An engaging and challenging multiplayer game that can be played online. Uses UDP protocol for real time communication.</p>
                    <p className='mb-4'>
                        <span className='fw-bold font-karla me-1'>Technologies used:</span><span className='font-karla'>PHP, MySQL, Linux</span>
                    </p>
                    <div>
                        <p className='d-flex align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{'cursor': 'pointer'}}>
                            <span className='font-manrope fw-bold me-3'>See project</span>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 12L8 12" stroke="#E63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#E63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </p>
                    </div>
                    {/* <a href="#" class=  "btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            <div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;