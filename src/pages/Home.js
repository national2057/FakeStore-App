import React from 'react'
import { useGetAllProductQuery } from '../app/fakeStore_api'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { isLoading, data } = useGetAllProductQuery()
  const nav = useNavigate()

  if (isLoading) {
    return (
      <h1 className='font-extrabold'>LOADING....</h1>
    )
  }

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mx-[150px] my-5'>
        {data && data?.map((items) => {
          return (
            <div onClick={() => nav(`single/${items.id}`)} key={items.id} className='hover:scale-105 ease-in-out duration-[375ms] shadow-lg cursor-pointer p-3 bg-zinc-200 rounded-md'>
              <img src={items.image} alt="" className='h-[350px]' />
              <h1>{items.title}</h1>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home