import Image from 'next/image';
import React from 'react'
import "./page.css"
import backTwoImg from "../../asseds/2nd-Background-image.svg"
const Hero = () => {
  return (
    <div>
      <div className='position-relative'>
        <Image src={backTwoImg} className='img-fluid' />
        <div className='position-absolute top-50 start-50 translate-middle text-white text-center'>
            <h2 className='hero-font'>Propertice</h2>
            <p className='hero-para'>Home / Properties</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
