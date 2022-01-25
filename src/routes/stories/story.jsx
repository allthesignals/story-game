import React from 'react'
import {
  useParams
} from 'react-router-dom'
import { useQuery } from 'react-query'

export default function Dashboard (props) {
  const { id } = useParams()
  const { data: story, isLoading } = useQuery('stories', async () => {
    const response = await fetch(`http://localhost:3001/stories/${id}`)

    return response.json()
  })

  if (isLoading) return 'Loading...'

  return (
    <main className='container mx-auto'>
      <div>Story {story && story.id}</div>
    </main>
  )
}
