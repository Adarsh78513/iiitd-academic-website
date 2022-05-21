import React from 'react'
import MARQUEE from "react-fast-marquee";
import '../styles/marquee.css'
const Marquee = () => {
    return (
        <div>
            <MARQUEE gradientWidth='20' speed='50' className='marquee'>
                New Notifications can be shown here...
            </MARQUEE>
        </div>
    )
}

export default Marquee