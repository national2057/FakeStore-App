import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductByCategoryQuery } from '../app/fakeStore_api'

const Category = () => {

  const { categorizz } = useParams()
  const { isLoading, data } = useGetProductByCategoryQuery(categorizz)
  const nav = useNavigate()

  if (isLoading) {
    return (
      <h1 className='font-bold text-lg'>LOADING....</h1>
    )
  }

  return (
    <>
      <div className='grid grid-cols-3 px-[65px] py-6 bg-slate-400 gap-10 '>
        {data && data?.map((items) => {
          return (
            // <div key={items.id} className="grid grid-cols-1 sm:grid-cols-2 gap-8" >
            //   <img src={items.image} alt="" className="h-[540px] ml-[175px] rounded-md mt-[50px] shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" />

            //   <div className="p-5 mr-[110px] mt-10 border border-gray-300 rounded-lg shadow-lg bg-slate-300">
            //     <h1 className="text-2xl font-bold mb-4">{items.title}</h1>
            //     <p className="mt-2 text-lg font-semibold">Category: {items.category}</p>

            //     <p className="text-lg font-bold mb-3">Price: Rs.{items.price}</p>
            //     <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-600 hover:shadow-md mt-5">
            //       Add to Cart
            //     </button>
            //   </div>
            // </div>

            <div key={items.id} onClick={() => nav(`/single/${items.id}`)} className='bg-orange-400  w-[450px] p-6 rounded-lg space-y-4 text-white font-mono cursor-pointer'>
              <img src={items.image} alt=""
                className='h-[400px] w-[450px] rounded-md' />
              <h1>{items.title}</h1>
              <p>Price:- Rs.{items.price}</p>
              <button type='submit' className='bg-blue-600 px-3 py-1 rounded-lg'>
                Add to Cart
              </button>
            </div>

          )
        })}
      </div >
    </>
  )
}
export default Category