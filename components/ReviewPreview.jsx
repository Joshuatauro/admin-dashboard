import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Moment from 'react-moment'

const ReviewPreview = ({name, rating=3, review, title, createdAt}) => {
  const starCountArray = []
  for (let i=0; i<rating; i++){
    starCountArray.push(i)
  }
  return (
    <li className="flex items-center px-2 rounded-md py-3 duration-200 transition-all justify-between my-2 text-gray-400  hover:bg-blue-secondary">
      <div className="flex ">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-white text-md mr-2">{name}</h1>
              <Moment className="text-white text-xs" format="MMM DD, YYYY">{createdAt}</Moment>

            </div>
            <div className="flex">
              {
                starCountArray.map(star => <StarIcon className="h-5 w-5 text-yellow-500 " />)
              }
            </div>
          </div>
          <p className="text-sm whitespace-pre-wrap">{review}</p>
        </div>
      </div>
    </li>
  )
}

export default ReviewPreview
