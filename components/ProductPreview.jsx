import { CurrencyRupeeIcon } from '@heroicons/react/outline'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const ProductPreview = ({url, name, price, salePrice, onSale, reviewCount,id}) => {
  return (  
    <article className="w-full bg-blue-primary rounded-md">
      <div className="px-4 py-3">
        <div className="grid grid-cols-3">
          <img src={url} className=" h-36 flex items-center justify-center w-full object-contain mix-blend-multiply" alt=""  />
          <div className="ml-5 col-span-2 flex flex-col justify-between">
            <div className="">
                <h1 className="text-xl font-bold ">{name}</h1>

              <div className="flex mt-1">
                <span className="bg-blue-secondary text-sm mr-2 flex items-center px-2 py-1 rounded-md uppercase max-w-max font-rubik">
                  <CurrencyRupeeIcon className="h-5 w-5 mr-1 text-green-500" />
                  {onSale ? salePrice : price}
                </span>
                <span className="bg-blue-secondary text-sm mr-2 flex items-center px-2 py-1 rounded-md uppercase max-w-max font-rubik">
                  <StarIcon className="h-5 w-5 mr-1 text-yellow-500" />
                  4
                </span>
                {
                  onSale && (
                    <span className="bg-blue-secondary text-sm mr-2 flex items-center px-2 py-1 rounded-md uppercase max-w-max font-rubik">
                      ON SALE
                    </span>
                  )
                }
              </div>
            </div>
            <div className=" flex flex-col items-end w-full">
              <Link href={`/products/${id}`}>
                <a className="bg-blue-secondary px-5 py-2 font-bold rounded-md text-sm">EDIT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductPreview
