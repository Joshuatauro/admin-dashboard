import React, { useEffect, useState } from 'react'
import Link  from 'next/link'

const Navbar = () => {
  const [path, setPath] = useState()
  useEffect(() => {
    if(!(typeof window === undefined)){
      setPath(window.location.href.split('/')[3])
    }
  }, [])
  return (
    <nav className="w-48 h-screen bg-blue-primary sticky top-0">
      <div className="w-10/12 m-auto py-10 h-full flex flex-col">
        <h1 className="uppercase font-black text-white px-2">Dashboard</h1>
        <ul className=" flex-1 flex flex-col justify-center">
          <Link href="/">
            <a>
              <li className={`flex items-center font-bold text-xs transition-all duration-150  rounded-md py-2 ${path === '' ? 'text-white': "text-gray-400"}   my-1 px-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h1 className="uppercase">Home</h1>
              </li>
            </a>
          </Link>
          <Link href="/orders">
            <a>
              <li className={`flex items-center font-bold text-xs transition-all duration-150  rounded-md py-2  ${path === 'orders' ? 'text-white': "text-gray-400"} my-1 px-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h1 className="uppercase">Orders</h1>
              </li>
            </a>
          </Link>
          <Link href="/users">
            <a>
              <li className={`flex items-center font-bold text-xs transition-all duration-150  rounded-md py-2 ${path === 'users' ? 'text-white': "text-gray-400"} my-1 px-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h1 className="uppercase">Users</h1>
              </li>
            </a>
          </Link>
          <Link href="/products">
            <a>
              <li className={`flex items-center font-bold text-xs transition-all duration-150  rounded-md py-2 ${path === 'products' ? 'text-white': "text-gray-400"} my-1 px-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <h1 className="uppercase">Products</h1>
              </li>
            </a>
          </Link>
        </ul>
          <Link href="/settings">
            <a>
              <li className={`flex items-center font-bold text-xs transition-all duration-150  rounded-md py-2 ${path === 'settings' ?'text-white': "text-gray-400"} my-1 px-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h1 className="uppercase">Settings</h1>
              </li>
            </a>
          </Link>
      </div>
    </nav>
  )
}

export default Navbar
