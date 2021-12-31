import Head from 'next/head'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Order from '../components/Order'
import User from '../components/User'


export default function Login({userData}) {

  return (
    <div className="w-full min-h-screen bg-blue-secondary">
      <div className="w-11/12 m-auto">
        <h1 className=" font-extrabold text-white text-2xl uppercase ">Our Users</h1>
        <p className="text-gray-400 text-sm ">Manage and view all details related to our users through this dashboard</p>
        <div className="mt-10 grid gap-3 grid-cols-3">
        
      </div>
      </div>          
    </div>
  )
}


