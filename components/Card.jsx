import React from 'react'

const Card = ({header, value, icon}) => {
  return (  
    <article className=" rounded-lg w-full">
      <div className=" m-auto mt-3 flex items-center">
        {icon}
        <div className="">
          <h1 className="text-gray-400 uppercase text-xs font-bold">{header}</h1>
          <h1 className="text-white text-2xl font-rubik font-extrabold align-middle flex items-center">{value}</h1>
        </div>
      </div>
    </article>
  )
}

export default Card
