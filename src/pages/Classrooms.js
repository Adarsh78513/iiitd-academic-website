import React, { useEffect, useState } from 'react'
import '../styles/classrooms.css'
import { ParallaxBanner } from 'react-scroll-parallax';


const Classrooms = () => {

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
    <ParallaxBanner
      style={{
        height: '100vh',
        width: 'auto'
      }}
      layers={[
        {
          children: (
            <video
              autoPlay
              loop
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              preload="auto"
              muted
              src="campustour.mp4"
            />
          ),
        },
      ]}
    >
      <div className='page classroom'>
        <div className='heading' style={{ marginBottom: "35vh" }}>Classrooms</div>
        <div className="classContainer">
          <a style={{ textDecoration: 'none' }} href='./Old.jpg'>
            <div className="cell">
              <img className="old" src="https://www.highereducationdigest.com/wp-content/uploads/2020/02/IIIT-D-768x461.jpg" alt="" />
              <div>Academic Building</div>
            </div>
          </a>
          <a style={{ textDecoration: 'none' }} href="./Lhc.jpg">
            <div className="cell">
              <img className='lhc' src="https://iiitd.ac.in/gallery/assets/img/Institute/institute19-1.jpg" alt="" />
              <div>Lecture Hall Complex</div>
            </div>
          </a>
          <a style={{ textDecoration: 'none' }} href="./R&d.jpg">
            <div className="cell">
              <img className="lhc" src="https://images.shiksha.com/mediadata/images/articles/1607484338php8JZWhd.jpeg" alt="" />
              <div>R & D Building</div>
            </div>
          </a>
        </div>
      </div>
    </ParallaxBanner>

  )
}

export default Classrooms