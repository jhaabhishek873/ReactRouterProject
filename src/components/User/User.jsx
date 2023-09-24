import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-white text-3xl bg-gray-600 p-4'>User: {userId}</div>
  )
}

export default User