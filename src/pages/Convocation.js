import React from 'react'
import '../styles/convocation.css'

const Convocation = () => {
    return (
        <div className='page' style={{ backgroundColor: " rgb(239, 239, 240)" }}>
            <div className="heading">Convocation</div>
            <div className="convocation">
                <a href="https://iiitd.ac.in/convocation21/" style={{ textDecoration: 'none' }}>
                    <div className="convoCont">
                        Recently Held 10th Convocation
                        <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3927.jpg" alt="" />
                    </div>
                </a>
                <a href="https://iiitd.ac.in/academics/pastconvocations" style={{ textDecoration: 'none' }}>
                    <div className="convoCont">
                        Previous Convocations
                        <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3511.jpg" alt="" />
                    </div>
                </a>
            </div>
        </div >
    )
}

export default Convocation