import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import axios from 'axios'
import Card from '../../components/Card'
import Moment from 'react-moment'
import ReviewPreview from '../../components/ReviewPreview'
export const getServerSideProps = async(context) => {
  const getUserDetailsQuery = await axios.get(`http://localhost:5000/api/admin/users/${context.params.id}/details`)

  const getUserReviewsQuery = await axios.get(`http://localhost:5000/api/admin/reviews/${context.params.id}`)

  return {
    props: {details: getUserDetailsQuery.data.userDetails, reviews: getUserReviewsQuery.data.userReviews}
  } 
}

const view = ({details, reviews}) => {
  const adminLevelsArray = ['Super Admin', 'Admin', 'Member']
  
  const { admin_level, name, email, id, created_at } = details
  
  const [adminLevel, setAdminLevel] = useState(adminLevelsArray[admin_level])


  

  const makeAdmin = async() => {
    const { data } = await axios.put(`http://localhost:5000/api/admin/users/make-admin/${id}`)
    if(data.wasUpdated) {
      setAdminLevel('Admin')
    }
  }

  return (
    <div className="flex">
    <Navbar />
    <div className="w-full min-h-screen bg-blue-secondary text-white">
      <div className="w-11/12 m-auto py-9">
        <h1 className="text-2xl font-bold">{name.split(' ')[0]}'s details</h1>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="bg-blue-primary rounded-lg py-4">
              <div className="px-5">
                <h1 className="text-white text-lg uppercase font-bold ">Name</h1>
                <h1 className="text-gray-400 text-md font-medium">{name}</h1>
              </div>
            </div>
            <div className="bg-blue-primary rounded-lg py-4">
              <div className="px-5">
                <h1 className="text-white text-lg uppercase font-bold ">Email Id</h1>
                <h1 className="text-gray-400 text-md font-medium">{email}</h1>
              </div>
            </div>
            <div className="bg-blue-primary rounded-lg py-4">
              <div className="px-5">
                <h1 className="text-white text-lg uppercase font-bold ">Joined on</h1>
                <h1 className="text-gray-400 text-md font-medium"><Moment format="DD MMM YYYY">{created_at}</Moment></h1>
              </div>
            </div>
            <div className="bg-blue-primary col-span-2 rounded-lg pt-4">
              <div className="px-5">
                <h1 className="text-white text-lg uppercase font-bold ">Reviews</h1>
                {
                  reviews.map(({name, created_at, title, review, rating}) => <ReviewPreview name={name} createdAt={created_at} title={title} review={review} rating={rating} />)
                }
              </div>
              
            </div>
            <div className="bg-blue-primary rounded-lg  h-32">
              <div className="px-5 pt-3 h-full">
                <h1 className="text-white text-lg uppercase font-bold ">Account privileges</h1>
                <h1 className="text-gray-400 text-md font-medium">{adminLevel}</h1>
                <button onClick={makeAdmin} disabled={adminLevel !== "Member"} className={`w-full py-2 mt-2 rounded-md bg-green-500 ${adminLevel === "Member" ? "" : "bg-gray-500 cursor-not-allowed"}`}>Make Admin</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default view
