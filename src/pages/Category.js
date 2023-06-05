import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByCategoryQuery } from '../app/fakeStore_api'

const Category = () => {

  const { categorizz } = useParams()
  const { isLoading, data } = useGetProductByCategoryQuery(categorizz)

  if (isLoading) {
    return (
      <h1>LOADING....</h1>
    )
  }

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default Category