import React, { useState, useEffect } from 'react'
import '../styles/convocation.css'
import { Parallax } from 'react-scroll-parallax';

const Convocation = () => {

    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowDimensions)
        console.log(size);
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [window.innerWidth])
    return (
        <div className='page' style={{ backgroundColor: " rgb(239, 239, 240)" }}>
            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>Convocation</div>
            <div className="convocation">
                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '-40%',
                        '18%'
                    ]}
                    opacity={[
                        0,
                        2.5
                    ]}
                >
                    <a href="https://iiitd.ac.in/convocation21/" style={{ textDecoration: 'none' }}>
                        <div className={size > 800 ? 'convoCont' : size > 500 ? 'smallConvoCont' : 'vSmallConvoCont'}>
                            Recent 10th Convocation
                            <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3927.jpg" alt="" />
                        </div>
                    </a>
                </Parallax>
                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    translateX={[
                        '40%',
                        '-18%'
                    ]}
                    opacity={[
                        0,
                        2.5
                    ]}
                >
                    <a href="https://iiitd.ac.in/academics/pastconvocations" style={{ textDecoration: 'none' }}>
                        <div className={size > 800 ? 'convoCont' : size > 500 ? 'smallConvoCont' : 'vSmallConvoCont'}>
                            Previous Convocations
                            <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3511.jpg" alt="" />
                        </div>
                    </a>
                </Parallax>
            </div>
        </div >
    )
}

export default Convocation