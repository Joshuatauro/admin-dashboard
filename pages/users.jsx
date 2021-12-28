import Head from 'next/head'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Order from '../components/Order'
import User from '../components/User'

export const getServerSideProps = async() => {
  const { data } = await axios.get('http://localhost:5000/api/admin/users')

  return {
    props: {userData: data.users}
  } 
} 

export default function Orders({userData}) {

  return (
    <div className="flex">
      <Navbar />
      <div className="w-full min-h-screen bg-blue-secondary">
        <div className="w-11/12 m-auto my-5">
          <h1 className=" font-extrabold text-white text-2xl uppercase ">Our Users</h1>
          <p className="text-gray-400 text-sm ">Manage and view all details related to our users through this dashboard</p>
          <div className="mt-10 grid gap-3 grid-cols-3">
          {
            userData.map(({name, admin_level, email, id}) => <User key={id} id={id} name={name} email={email} adminLevel={admin_level}/>)
          }
        </div>
        </div>          
      </div>
    </div>
  )
}


