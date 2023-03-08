import { useId } from 'react';

const ResumeItem = (props) => {
    const uniqueId = useId();
    return (
        <div>
            <div style={{ 'cursor': 'pointer' }} className='my-4' data-bs-toggle="collapse" data-bs-target={"#" + uniqueId} aria-expanded="false" aria-controls="collapseWidthExample">
                <div className='d-flex justify-content-between'>
                    <div>
                        <div>
                            <span className='font-karla fw-medium text-gray'  style={{ 'font-size': '23px' }}>{props.data.title}</span>
                        </div>
                    </div>
                    <div>
                        <span className='badge text-bg-success'>{props.data.type}</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <div className='d-flex'>
                            <div className='d-flex me-3'>
                                <svg className='me-1' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <span className='font-manrope fw-semibold text-gray' style={{ 'font-size': '14px' }}>{props.data.organization}</span>
                            </div>
                            <div className='d-flex'>
                                <svg className='me-1' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <span className='font-manrope fw-semibold text-gray' style={{ 'font-size': '14px' }}>{props.data.location}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='font-manrope fw-semibold text-gray' style={{ 'font-size': '13px' }}>{props.data.date}</span>
                    </div>
                </div>
                <div className="collapse" id={uniqueId}>
                    <div className="card card-body" style={{ 'border': 'none' }}>
                        <ul>
                            <li>First line.</li>
                            <li>First line.</li>
                            <li>First line.</li>
                            <li>First line.</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ResumeItem;