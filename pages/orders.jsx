import Head from 'next/head'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Order from '../components/Order'

export const getServerSideProps = async() => {
  const { data } = await axios.get('http://localhost:5000/api/admin/orders')

  return {
    props: {orderData: data.orders}
  } 
} 

export default function Orders({orderData}) {
  

  return (
    <div className="flex">
      <Navbar />
      <div className="w-full min-h-screen bg-blue-secondary h-4">
        <div className="w-11/12 m-auto my-5">
          <h1 className=" font-extrabold text-white text-2xl uppercase ">Latest Orders</h1>
          <p className="text-gray-400 text-sm ">Control the delivery status of different orders without much hassle</p>
          <div className="mt-10 grid gap-3 grid-cols-2">
            {
              orderData.map(({id, created_at, total, order_content, is_delivered})=> <Order id={id} key={id} createdAt={created_at} total={total} isDelivered={is_delivered} orderContent={order_content} />)
            }
        </div>
        </div>          
      </div>
    </div>
  )
}


