const TechnologiesCard = ( { bgcolor, svg }) => {
    return (
        <div>
            <div style={{ 'backgroundColor': bgcolor }} className="p-5 d-flex align-items-center justify-content-center mx-3 skills-color-box skills-box">
                { svg }
            </div>
        </div>
    )
}

export default TechnologiesCard;