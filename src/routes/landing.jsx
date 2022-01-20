import React from 'react'
import Auth from '../components/auth'

export default function Landing () {
  return (
    <div className='container mx-auto p-2'>
      <h1 className='text-2xl'>
        StoryBored
      </h1>

      <h2 className='text-left text-2xl text-gray-500 pt-2'>
        The Story So Far...
      </h2>

      <h2 className='text-left text-2xl text-gray-500 pt-2'>
        You decide!
      </h2>

      <Auth />
    </div>
  )
}
