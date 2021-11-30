import React from 'react'
import Moment from 'react-moment'
const OrderPreview = ({id, isDelivered, createdAt}) => {
  return (
    <li className="flex items-center justify-between mt-3">
      <div  className="flex items-center">
        <span className={`h-2 w-2 rounded-full mr-3 ${isDelivered ? 'bg-green-600' : 'bg-yellow-600'}`}></span>
        <h1 className="text-sm text-gray-400 font-rubik">ORDER{id}</h1>
      </div>
      <Moment className="text-white text-xs" format="MMM DD, YYYY">{createdAt}</Moment>
    </li>
  )
}

export default OrderPreview
