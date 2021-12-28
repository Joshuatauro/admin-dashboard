import React from 'react'
import Link from 'next/link'
const User = ({name, email, adminLevel, id}) => {
  let adminType

  if(adminLevel === 0) {
    adminType = "Super Admin"
  } else if (adminLevel === 1) {
    adminType = "Admin"
  } else {
    adminType="Member"
  }


  return (
    <Link href={`/users/${id}`}>
      <a>
        <article className="w-full bg-blue-primary border border-gray-primary hover:border-green-500 duration-200 transition-all py-2 rounded-md text-white">
          <div className="w-11/12 m-auto">
            <div className="flex items-center">
              <h1 className="font-medium ">{name}</h1>
              <span className="bg-green-500 rounded-full ml-2 py-0.5 text-xs px-2">{adminType}</span>
            </div>
            <h2 className="text-sm text-gray-400 mt-1">{email}</h2>
          </div>
        </article>
      </a>
    </Link>

  )

}

export default User