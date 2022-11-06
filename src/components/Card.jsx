import React from 'react'
import star from "../assets/star.png"

const Card = ({data}) => {
  console.log("data------->",data)
  const { id, location,openSpot,stats,title,price,coverImage} = data
  const {rating,reviewCount} = stats
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 ">
        <img src={coverImage} className="w-[200%] h-[250px]  "/>
        <div className=' flex flex-1 mt-[5%] '>
            <img src={star} className="w-[23px] h-[23px]  object-contain" />
            <span className="text-black">{rating}</span> {" "}
            <span className="text-gray ml-1">({reviewCount})</span>
            <span className="text-gray ml-3">{openSpot}</span>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ">{title}</p>
        <p className="font-poppins font-medium text-[15px] leading-[20px] "><span className="text-semibold">From {price}</span> / person</p>
    </div>
  )
}

export default Card