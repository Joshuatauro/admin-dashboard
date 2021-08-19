import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
const ReviewPreview = () => {
  return (
    <li className="flex items-center px-2 rounded-md py-3 duration-200 transition-all justify-between my-2 text-gray-400  hover:bg-blue-secondary">
      <div className="flex ">
        <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className=" h-8 w-auto rounded-full object-contain mr-2" alt="" />
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-white text-md mr-2">Jane Doe</h1>
              <p className="text-xs">Aug 25, 2021</p>
            </div>
            <div className="flex">
              {
                [1,2,3,4,5].map(star => <StarIcon className="h-5 w-5 text-yellow-500 " />)
              }
            </div>
          </div>
          <p className="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
        </div>
      </div>
    </li>
  )
}

export default ReviewPreview
