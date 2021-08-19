import Head from 'next/head'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { TrendingUpIcon, CurrencyDollarIcon, GiftIcon, UserAddIcon, TruckIcon, ViewGridIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import ReviewPreview from '../components/ReviewPreview'
import NewUserPreview from '../components/NewUserPreview'


export default function Home() {
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
                        <Card header="Total Revenue" value="$8500" icon={<CurrencyDollarIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                        <Card header="Total Profit" value={54} icon={<TrendingUpIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-primary rounded-lg py-5 mt-5">
                    <div className="px-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Current Statistics</h1>
                      <div className="grid gap-y-4 gap-x-3 grid-cols-2 ">
                        <Card header="New Orders" value="456" icon={<ShoppingBagIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />} />
                        <Card header="New signups" value={54} icon={<UserAddIcon className="h-9 w-10 py-2 pl-2 pr-1 text-white bg-green-400 rounded-lg mr-2" />} />
                        <Card header="Orders Delivered" value="40" icon={<HomeIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                        <Card header="Orders En Route" value="30" icon={<TruckIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                        <Card header="Total Products" value="30" icon={<ViewGridIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                        <Card header="Products On Sale" value="30" icon={<GiftIcon className="h-9 w-9 p-2 text-white bg-green-400 rounded-lg mr-2" />}  />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-primary rounded-lg pt-5 pb-2 ">
                    <div className="px-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Latest Signups</h1>
                      <ul className="mt-3">
                        <NewUserPreview />
                        <NewUserPreview />
                        <NewUserPreview />
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-primary rounded-lg pt-5 pb-2 ">
                    <div className="px-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Latest Reviews</h1>
                      <ul>
                        <ReviewPreview />
                        <ReviewPreview />
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-primary rounded-lg  ">
                    <div className="px-5 py-5">
                      <h1 className="text-white text-xl uppercase font-bold ">Latest Orders</h1>
                      <ul className="mt-4">
                        <li className="flex items-center justify-between mt-3">
                          <div  className="flex items-center">
                            <span className="h-2 w-2 rounded-full mr-3 bg-green-500"></span>
                            <h1 className="text-sm text-gray-400 font-rubik">ORDER606f319cfcd26158cce8abc6</h1>
                          </div>
                          <p className="text-white text-sm">25th Aug</p>
                        </li>
                        <li className="flex items-center justify-between mt-3">
                          <div  className="flex items-center">
                            <span className="h-2 w-2 rounded-full mr-3 bg-yellow-500"></span>
                            <h1 className="text-sm text-gray-400 font-rubik">ORDER606f319cfcd26158cce8abc6</h1>
                          </div>
                          <p className="text-white text-sm">25th Aug</p>
                        </li>
                        <li className="flex items-center justify-between mt-3">
                          <div  className="flex items-center">
                            <span className="h-2 w-2 rounded-full mr-3 bg-red-500"></span>
                            <h1 className="text-sm text-gray-400 font-rubik">ORDER606f319cfcd26158cce8abc6</h1>
                          </div>
                          <p className="text-white text-sm">25th Aug</p>
                        </li>
                        <li className="flex items-center justify-between mt-3">
                          <div  className="flex items-center">
                            <span className="h-2 w-2 rounded-full mr-3 bg-green-500"></span>
                            <h1 className="text-sm text-gray-400 font-rubik">ORDER606f319cfcd26158cce8abc6</h1>
                          </div>
                          <p className="text-white text-sm">25th Aug</p>
                        </li>
                        <li className="flex items-center justify-between mt-3">
                          <div  className="flex items-center">
                            <span className="h-2 w-2 rounded-full mr-3 bg-yellow-500"></span>
                            <h1 className="text-sm text-gray-400 font-rubik">ORDER606f319cfcd26158cce8abc6</h1>
                          </div>
                          <p className="text-white text-sm">25th Aug</p>
                        </li>
                        <li className="flex items-center justify-between mt-3">
                          <div  className="flex items-center">
                            <span className="h-2 w-2 rounded-full mr-3 bg-red-500"></span>
                            <h1 className="text-sm text-gray-400 font-rubik">ORDER606f319cfcd26158cce8abc6</h1>
                          </div>
                          <p className="text-white text-sm">25th Aug</p>
                        </li>
                        
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
