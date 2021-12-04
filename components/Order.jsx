import React from 'react'
import Moment from 'react-moment'
const Order = ({id, total, orderContent, createdAt,isDelivered}) => {
  return (
    <article className="bg-blue-primary rounded-md">
      <div className="px-4 py-3">
        <h1 className="font-medium text-white">ORDER{id}</h1>
        <ul>
          <li>
            <h1></h1>
          </li>
        </ul>
        
      </div>
    </article>
  )
}

export default Order
