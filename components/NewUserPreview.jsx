import React from 'react'
import Moment from 'react-moment';

const NewUserPreview = ({name, email, createdAt}) => {
  return (
    <li className="flex items-center px-2 rounded-md py-2 duration-200 transition-all justify-between my-2 text-gray-400  hover:bg-blue-secondary">
      <div className="flex items-center">
        <div className="">
          <h1 className="text-white text-md">{name}</h1>
          <p className="text-xs">{email}</p>
        </div>
      </div>
      <Moment className="text-white text-sm" format="MMM DD, YYYY">{createdAt}</Moment>
    </li>
  )
}

export default NewUserPreview
