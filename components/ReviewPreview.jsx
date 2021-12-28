import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Moment from 'react-moment'

const ReviewPreview = ({name, rating, review, title, createdAt}) => {
  const starCountArray = []
  for (let i=0; i<rating; i++){
    starCountArray.push(i)
  }
  return (
    <li className="flex items-center rounded-md pb-4 duration-200 transition-all justify-between my-2">
      <div className="flex ">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex">
              {
                starCountArray.map(star => <StarIcon className="h-5 w-5 text-yellow-500 " />)
              }
            </div>
          </div>
          <h1 className="text-md text-white font-medium">{title}</h1>
          <p className="text-sm font-normal text-gray-400 py-1 whitespace-pre-wrap">{review}</p>
          <div className="flex">
            <p className="text-xs text-gray-300">by {name} •</p>
            <Moment className="text-xs text-white ml-1" fromNow>{createdAt}</Moment>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ReviewPreview
