import { CurrencyDollarIcon } from '@heroicons/react/outline'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
const ProductPreview = ({url, name, price, salePrice, onSale, reviewCount}) => {
  return (  
    <article className="w-full bg-blue-primary rounded-md">
      <div className="px-4 py-3">
        <div className="grid grid-cols-3">
          <img src="https://res.cloudinary.com/dvjlrqrlx/image/upload/v1625145216/alpha-store/q7jojwymuv5ih4fvcffa.jpg" className=" h-36 w-auto object-contain" alt="" />
          <div className="ml-5 col-span-2 flex flex-col justify-between">
            <div className="">

              <h1 className="text-xl font-bold ">{name}</h1>
              <div className="flex mt-1">
                <span className="bg-blue-secondary mr-2 flex items-center px-2 py-1 rounded-md uppercase max-w-max font-rubik">
                  <CurrencyDollarIcon className="h-5 w-5 mr-1 text-green-500" />
                  {price}
                </span>
                <span className="bg-blue-secondary mr-2 flex items-center px-2 py-1 rounded-md uppercase max-w-max font-rubik">
                  <StarIcon className="h-5 w-5 mr-1 text-yellow-500" />
                  {reviewCount}
                </span>
                {
                  onSale && (
                    <span className="bg-blue-secondary mr-2 flex items-center px-2 py-1 rounded-md uppercase max-w-max font-rubik">
                      ON SALE
                    </span>
                  )
                }
              </div>
            </div>
            <div className=" flex flex-col items-end w-full">
              <button className="bg-blue-secondary px-5 py-2 rounded-md text-sm">EDIT</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductPreview
