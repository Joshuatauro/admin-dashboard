import React from 'react'

const NewUserPreview = () => {
  return (
    <li className="flex items-center px-2 rounded-md py-2 duration-200 transition-all justify-between my-2 text-gray-400  hover:bg-blue-secondary">
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className=" h-8 w-auto rounded-full object-contain mr-2" alt="" />
        <div className="">
          <h1 className="text-white text-md">Jane Doe</h1>
          <p className="text-xs">janedoe12345@gmail.com</p>
        </div>
      </div>
      <p className="text-white text-sm">27th  August</p>
    </li>
  )
}

export default NewUserPreview
