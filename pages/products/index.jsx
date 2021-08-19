import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'
import ProductPreview from '../../components/ProductPreview'
const index = () => {
  return (
    <div className="flex">
    <Navbar />
    <div className="w-full min-h-screen bg-blue-secondary text-white">
      <div className="w-11/12 m-auto py-9">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className=" font-extrabold text-white text-2xl uppercase "> Our products</h1>
            <p className="text-sm text-gray-400">Have complete control of all your products all while sitting on your desk</p>
          </div>
          <Link href='/products/add'>
            <a className="px-5 text-sm bg-blue-primary font-bold flex items-center justify-center rounded-md uppercase">New product</a>
          </Link>
        </div>
        <div className="mt-10 grid gap-3 grid-cols-2">
          <ProductPreview name='2020 Apple MacBook Pro' price={5000} reviewCount={4} onSale={true}/>
          <ProductPreview name='2020 Apple MacBook Pro' price={5000} reviewCount={4} />
          <ProductPreview name='2020 Apple MacBook Pro' price={5000} reviewCount={4} />
          <ProductPreview name='2020 Apple MacBook Pro' price={5000} reviewCount={4} />

        </div>
      </div>
    </div>
    </div>
  )
}

export default index
