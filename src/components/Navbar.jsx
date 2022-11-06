import React from 'react'
import Airbnb from "../assets/air-bnb-logo.png"

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] flex py-6 px-[20px] justify-between items-center shadow-lg navbar">
      <img src={Airbnb} alt="logo" className="max-w-[120px] h-[30px]" />
    </nav>
  )
}

export default Navbar