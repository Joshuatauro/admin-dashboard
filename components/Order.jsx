import axios from 'axios'
import React, { useState } from 'react'
import Moment from 'react-moment'
import { RefreshIcon } from '@heroicons/react/solid'
const Order = ({id, total, orderContent, createdAt,isDelivered}) => {

  const [isOrderDelivered, setIsOrderDelivered] = useState(isDelivered)
  const [loading, setLoading] = useState(false)

  const updateDeliveryStatus = async() => {
    setLoading(true)
    const {data} = await axios.put(`http://localhost:5000/api/admin/orders/mark-delivered/${id}`)
    if(data.wasUpdated) {
      setIsOrderDelivered(true)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  return (
    <article className="bg-blue-primary rounded-md">
      <div className="px-4 py-3">
        <h1 className="font-semibold text-white">ORDER{id}</h1>
        <ul>
          <li className="flex uppercase text-sm">
            <h1 className="text-gray-400 font-medium">
              Status: {isOrderDelivered ? <span className="text-green-500">Delivered</span> : <span className="text-yellow-600">En-route</span>}
            </h1>
          </li>
          <li className="flex uppercase text-sm">
            <h1 className="text-gray-400 font-medium">
              Ordered On: <Moment className="text-gray-200 text-sm" format="MMM DD, YYYY">{createdAt}</Moment>
            </h1>
          </li>
          <li className="flex uppercase text-sm">
            <h1 className="text-gray-400 font-medium">
              Order Content: 
              <span className="text-gray-200">
                {
                  orderContent.map(({name}) => {
                    const splitWord = name.split(' ')
                    return (
                      splitWord[splitWord.length - 1]+","
                    )
                  })
                }
              </span>
            </h1>
          </li>
          <li className="flex uppercase text-sm">
            <h1 className="text-gray-400 font-medium">
              Billed amount: <span className="text-gray-200">₹{total}</span>
            </h1>
          </li>
        </ul>
        {
          isOrderDelivered ? (
            <button className="w-full py-3 mt-2 rounded-md bg-green-600 uppercase cursor-not-allowed  font-semibold text-white text-sm">Order delivered</button>
          ) : (
            <button onClick={updateDeliveryStatus} disabled={loading} className={`w-full py-3 mt-2 rounded-md bg-yellow-600 uppercase font-semibold flex items-center flex-col text-white text-sm ${loading ? 'cursor-not-allowed' : ""}`}>{loading ? <RefreshIcon className="animate-spin h-6 w-6" /> : "Mark order delivered"}</button>
          )
        }
      </div>
    </article>
  )
}

export default Order
