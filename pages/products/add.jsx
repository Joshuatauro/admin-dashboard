import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Navbar from '../../components/Navbar'
import { useDropzone } from 'react-dropzone'
import dynamic from 'next/dynamic'
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css' 
import { ChevronDownIcon } from '@heroicons/react/outline'
import { FaBold } from 'react-icons/fa'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(module => module.Editor),
  {
    ssr: false
  }
)

const add = () => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [desc, setDesc] = useState()
  const [files, setFiles] = useState()
  const [url, setUrl] = useState()
  const [seller, setSeller] = useState()
  const [salePrice, setSalePrice] = useState()

  const [imageReceived, setImageReceived] = useState(false)

  const [categoryOpen, isCategoryOpen] = useState(false)
  const [categoryValue, setCategoryValue] = useState()

  const [saleOpen, isSaleOpen] = useState(false)
  const [saleValue, setSaleValue] = useState()

  const { getRootProps, getInputProps } = useDropzone({
    accept:"image/*",
    onDrop: (acceptedFile) => {
      setFiles(
        acceptedFile.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
      if(files){
        setImageReceived(true)
      }
    }
  })

  const handleCategoryChange = (name) => {
    setCategoryValue(name)
    isCategoryOpen(false)
  }

  const handleSaleChange = (name) => {
    setSaleValue(name)
    isSaleOpen(false)
  }

  const viewing = true
  return (
    <div className="flex">
    <Navbar />
    <div className="w-full min-h-screen bg-blue-secondary text-white">
      <div className="w-11/12 m-auto py-9">
        <h1 className="text-2xl font-bold">New product</h1>
        <p className="text-gray-400 text-sm">Adding new products is now just a matter of minutes!</p>

          <div className="rounded-lg py-5">
            <div className="">
              <form action="" className=" mb-16" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative">
                    <input value={name} onChange={e => setName(e.target.value)} required type="text" name="email" id="input" className="pt-3 h-16 w-full focus:outline-none px-3 font-semibold bg-blue-primary rounded-md text-sm" />
                    <label id="main" htmlFor="email" className=" main-label absolute left-3 top-6 mb-0.5 font-bold text-xs">PRODUCT NAME</label>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input value={price} onChange={e => setPrice(e.target.value)} required name="email" id="input" className="pt-3 h-16 w-full focus:outline-none px-3 font-rubik font-semibold text-sm bg-blue-primary rounded-md" />
                      <label id="main" htmlFor="email" className="main-label text-header absolute left-3 top-6 mb-0.5 font-bold text-xs">PRICE</label>

                    </div>
                    <div className="relative">
                      <input value={salePrice} onChange={e => setSalePrice(e.target.value)} required name="email" id="input" className="pt-3 h-16 w-full focus:outline-none font-rubik font-semibold px-3 text-sm bg-blue-primary rounded-md" />
                      <label id="main" htmlFor="email" className="main-label text-header absolute left-3 top-6 mb-0.5 font-bold text-xs">SALE PRICE</label>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-x-3  my-3">
                  <div className="relative col-span-2 h-full">
                    <Editor 
                    className=" h-5"
                    id="input"
                    placeholder="DESCRIPTION"
                    wrapperClassName="flex flex-col h-full"
                    editorClassName="bg-blue-primary h-full flex-1  input resize-y focus:outline-none mt-1 px-3 h-full text-sm font-semibold bg-blue-primary rounded-md text-white"
                    toolbarClassName="border-0 rounded-md"
                    toolbar={
                      {
                        options: ['inline', 'list'],
                        inline: {
                          inDropdown: false,
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined,
                          options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
                          // bold: { icon: 'bold', className: undefined },
                          
                        },
                        list: {
                          inDropdown: false,
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined,
                          options: ['unordered', 'ordered'],
                          
                        },
                      }
                    }


                    />
                      {/* <textarea  required name="email" id="input" className="pt-6 h-full w-full resize-y focus:outline-none px-3  text-sm font-semibold bg-blue-primary rounded-md" />
                      <label id="main" htmlFor="email" className="main-label text-header absolute left-3 top-4 font-bold text-xs">DESCRIPTION</label> */}

                  </div>
                  {
                    imageReceived ? (
                      <div>
                        {
                          files?.map(file => {
                            return(
                              <img src={file.preview} alt="" className="w-full h-auto  grid items-center bg-blue-900 object-contain" />
                            )
                          })
                        }
                      </div>
                    ) : (
                      <div className="flex flex-col h-64">
                        <div {...getRootProps()} className="cursor-pointer h-full flex-1 rounded-md uppercase text-sm font-bold w-full bg-blue-primary flex items-center justify-center">
                          <input type="text" {...getInputProps()} />
                          <p>Drag or drop</p>
                        </div>
                        <span className="my-1 text-gray-400 flex justify-center">⇜ OR ⇝</span>
                        <div className="relative">
                            <input value={url} onChange={e => setUrl(e.target.value)} required type="text" name="email" id="input" className="pt-3 h-16 w-full focus:outline-none px-3 font-semibold bg-blue-primary rounded-md text-sm" />
                            <label id="main" htmlFor="email" className=" main-label text-header absolute left-3 top-6 mb-0.5 font-bold text-xs">PRODUCT URL</label>
                          </div>
                      </div>
                    )
                  }
                </div>
                <div className="grid grid-cols-2 gap-3 ">
                  <div className="relative">
                    <input value={seller} onChange={e => setSeller(e.target.value)} required type="text" name="email" id="input" className="pt-3 h-16 w-full focus:outline-none px-3 font-semibold bg-blue-primary rounded-md text-sm" />
                    <label id="main" htmlFor="email" className=" main-label text-header absolute left-3 top-6 mb-0.5 font-bold text-xs">SELLER NAME</label>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div  onClick={() => isCategoryOpen(!categoryOpen)}>
                      <div className="relative flex cursor-pointer">
                        <input autoComplete="off" value={categoryValue} required name="category" id="input"  className="cursor-pointer text-sm pt-3 uppercase h-16 w-full focus:outline-none px-3 font-semibold bg-blue-primary rounded-md" />
                        <label id="main" htmlFor="email" className="main-label text-header absolute left-3 top-6 mb-0.5 font-bold text-xs">CATEGORY</label>
                        <ChevronDownIcon className="absolute right-3 top-5 h-6 w-6" />
                        {
                          categoryOpen && (
                            <ul className="w-full absolute top-full mt-3  py-2 rounded-md bg-blue-primary">
                              <li onClick={() => handleCategoryChange('KEYBOARD')} className="py-2 px-2 w-11/12 m-auto hover:bg-blue-secondary cursor-pointer text-sm uppercase">KEYBOARD</li>
                              <li onClick={() => handleCategoryChange('GPU')} className="py-2 px-2 w-11/12 m-auto hover:bg-blue-secondary cursor-pointer text-sm uppercase">GPU</li>
                              <li onClick={() => handleCategoryChange('MOUSE')} className="py-2 px-2 w-11/12 m-auto hover:bg-blue-secondary cursor-pointer text-sm uppercase">MICE</li>
                              <li onClick={() => handleCategoryChange('HEADPHONE')} className="py-2 px-2 w-11/12 m-auto hover:bg-blue-secondary cursor-pointer text-sm uppercase">HEADPHONE</li>
                            </ul>
                          )
                        }
                      </div>
                    </div>
                    <div className="" onClick={() => isSaleOpen(!saleOpen)}>
                      <div className="relative flex ">
                        <input autoComplete="off"  value={saleValue} required name="category" id="input"  className="cursor-pointer text-sm pt-3 uppercase h-16 w-full focus:outline-none px-3 font-semibold bg-blue-primary rounded-md" />
                        <label id="main" htmlFor="email" className=" main-label text-header absolute left-3 top-6 mb-0.5 font-bold text-xs">ON SALE?</label>
                        <ChevronDownIcon className="absolute right-3 top-5 h-6 w-6" />
                        {
                          saleOpen && (
                            <ul className="w-full absolute top-full mt-3  py-2 rounded-md bg-blue-primary">
                              <li onClick={() => handleSaleChange('yes')} className="py-2 px-2 w-11/12 m-auto hover:bg-blue-secondary cursor-pointer text-sm uppercase">Yes</li>
                              <li onClick={() => handleSaleChange('no')} className="py-2 px-2 w-11/12 m-auto hover:bg-blue-secondary cursor-pointer text-sm uppercase">No</li>
                            </ul>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-3 bg-green-600 px-8 rounded-md py-3">ADD PRODUCT</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default add
