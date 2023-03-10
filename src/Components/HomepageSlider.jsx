import { useEffect, useRef } from "react"
import { textIntro, buttonIntro, imgIntro } from "./Animate"

const HomepageSlider = () => {
    let firstLine = useRef(null)
    let secondLine = useRef(null)
    let thirdLine = useRef(null)
    let firstButton = useRef(null)
    let firstImg = useRef(null)

    useEffect(() => {
        textIntro(firstLine)
        textIntro(secondLine)
        textIntro(thirdLine)
        buttonIntro(firstButton)
        imgIntro(firstImg)
    }, [firstLine, secondLine, thirdLine, firstButton])
    return (
        <div>
            <div className="container position-relative px-lg-3">
                <div style={{ 'height': '90vh' }}>
                    <div className="position-absolute" style={{ 'top': '150px' }}>
                        <div className="font-manrope" ref={(el) => { firstLine = el }} style={{ 'fontSize': '40px' }}>Hi,</div>
                    </div>
                    <div className="position-absolute" style={{ 'top': '250px' }}>
                        <div className="font-manrope fw-semibold" ref={(el) => { secondLine = el }} style={{ 'fontSize': '55px' }}>I'm Abhi Rijal,</div>
                    </div>
                    <div className="position-absolute" style={{ 'top': '380px' }}>
                        <div className="font-manrope" ref={(el) => { thirdLine = el }} style={{ 'fontSize': '24px' }}>and I like to keep it simple.</div>
                    </div>
                    <div className="position-absolute" style={{ 'top': '450px' }}>
                        <div>
                            <a href="#technicalSkills" ref={(el) => { firstButton = el }} type="button" className="btn btn-primary bg-red border-red font-manrope rounded-pill fw-bold px-4 py-3" style={{ 'whiteSpace': 'nowrap' }}>know more</a>
                        </div>
                    </div>
                    <div className="position-absolute" style={{ 'top': '100px', 'right': '0px' }}>
                        <div>
                            <img ref={(el) => { firstImg = el }} src="http://via.placeholder.com/640x640" alt='Abhi Rijal' className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageSlider;