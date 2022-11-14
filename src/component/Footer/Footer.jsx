import React from 'react'
import "./Footer.css"
import img1 from "../../Assets/images/coinbase_1.png"
import img2 from "../../Assets/images/binance1.png"
import img3 from "../../Assets/images/metamask1.png"
import img4 from "../../Assets/images/trustwallet1.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-box'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
    </div>
  )
}

export default Footer