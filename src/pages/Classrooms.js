import React from 'react'
import '../styles/classrooms.css'
import { ParallaxBanner  } from 'react-scroll-parallax';

const Classrooms = () => {
    return (
    <ParallaxBanner
      style={{ height: '100vh',
      width: '100vw' }}
      layers={[
        {
          speed: -0,
          children: (
            <video
              autoPlay
              loop
              preload="auto"
              muted
              src="campustour.mp4"
            />
          ),
        },
      ]}
    >
        <div className='page classroom'>
            <div className='heading'>Classrooms</div>
            <hr />
            <div className="classContainer">
                <a style={{ textDecoration: 'none' }} href="/classrooms">
                    <div className="cell">
                        <img className="old" src="https://www.highereducationdigest.com/wp-content/uploads/2020/02/IIIT-D-768x461.jpg" alt="" />
                        <div>Academic Building</div>
                    </div>
                </a>
                <a style={{ textDecoration: 'none' }} href="/classrooms">
                    <div className="cell">
                        <img className='lhc' src="https://iiitd.ac.in/gallery/assets/img/Institute/institute19-1.jpg" alt="" />
                        <div>Lecture Hall Complex</div>
                    </div>
                </a>
                <a style={{ textDecoration: 'none' }} href="/classrooms">
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