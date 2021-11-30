import Head from 'next/head'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { TrendingUpIcon, CurrencyDollarIcon, GiftIcon, UserAddIcon, TruckIcon, ViewGridIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import ReviewPreview from '../components/ReviewPreview'
import NewUserPreview from '../components/NewUserPreview'
import axios from 'axios'
import OrderPreview from '../components/OrderPreview'

export const getServerSideProps = async() => {
  const statisticsData = await axios.get('http://localhost:5000/api/admin/statistics')
  const userSignupsData = await axios.get('http://localhost:5000/api/admin/statistics/sign-ups')
  const reviewData = await axios.get('http://localhost:5000/api/admin/statistics/reviews')
  const ordersData = await axios.get('http://localhost:5000/api/admin/statistics/orders')
  return {
    props: {statistics: statisticsData.data, signups: userSignupsData.data.userSignups, reviews: reviewData.data.reviews, orders: ordersData.data.orders}
  } 
}
export default function Home({statistics, signups, reviews, orders}) {
  const {totalOrderAmount, totalOrderCount, totalOrdersDelivered, totalUserCount} = statistics
  console.log(reviews)
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full min-h-screen bg-blue-secondary">
        <div className="w-11/12 m-auto my-5">
          <h1 className=" font-extrabold text-white text-2xl uppercase ">Hello Joshua</h1>
          <p className="text-gray-400 text-sm ">Here's what we've got for you today</p>

          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 1020: 2}}>
                <Masonry columnsCount={2} gutter={20}>
                  <div className="bg-blue-primary rounded-lg py-5 mt-5">
                    <div className="px-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Sales Overview</h1>
                      <div className="grid gap-3 grid-cols-2 ">
                        <Card header="Total Revenue" value={totalOrderAmount} icon={<CurrencyDollarIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                        <Card header="Total Profit" value={Math.round(0.05 * totalOrderAmount)} icon={<TrendingUpIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-primary rounded-lg py-5 mt-5">
                    <div className="px-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Statistics</h1>
                      <div className="grid gap-y-4 gap-x-3 grid-cols-2 ">
                        <Card header="Total Orders" value={totalOrderCount} icon={<ShoppingBagIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />} />
                        <Card header="Total Users" value={totalUserCount} icon={<UserAddIcon className="h-9 w-10 py-2 pl-2 pr-1 text-white bg-green-400 rounded-lg mr-2" />} />
                        <Card header="Orders Delivered" value={totalOrdersDelivered} icon={<HomeIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                        <Card header="Orders En Route" value={totalOrderCount - totalOrdersDelivered} icon={<TruckIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-primary rounded-lg pt-5 pb-2 ">
                    <div className="px-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Latest Signups</h1>
                      <ul className="mt-3">
                        {signups.map(({name, email, created_at}) => <NewUserPreview name={name} email={email} createdAt={created_at} /> )}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-primary rounded-lg pt-5 pb-2 ">
                    <div className="px-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Latest Reviews</h1>
                      <ul>
                        {reviews.map(({name, title, rating, review, created_at}) => <ReviewPreview name={name} createdAt={created_at} title={title} rating={rating} review={review} />)}

                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-primary rounded-lg  ">
                    <div className="px-5 py-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Latest Orders</h1>
                      <ul className="mt-4">
                        {orders.map(({id, created_at, is_delivered}) => <OrderPreview id={id} createdAt={created_at} isDelivered={is_delivered} />)}
                      </ul>
                    </div>
                  </div>
                </Masonry>
            </ResponsiveMasonry>
        </div>
      </div>
    </div>
  )
}
