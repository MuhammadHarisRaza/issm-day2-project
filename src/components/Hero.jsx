import React from 'react'
import photo from "../assets/photo-grid.png"
import styles from '../style'

const Hero = () => {
  return (
    <>
      <section className={`flex md:flex-row flex-col justify-center ${styles.paddingY}`}>
        <img src={photo} alt="photoGrid" className="sm:max-w-[600px] max-w-[300px]  self-center" />
      </section>
      <div className="ml-[5%]">
        <h1 className='flex-1 font-poppins font-semibold ss:text-[42px]  ss:leading-[120%] leading-[110%] mb-[16px]'>Online Experiences</h1>
        <p className='flex-1 font-poppins font-normal ss:text-[20px]  ss:leading-[120%] leading-[110%] mb-[16px]'>Join unique interactive activities led by<br /> one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </>
    
  )
}

export default Hero