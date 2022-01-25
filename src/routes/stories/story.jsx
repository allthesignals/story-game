import React, { useEffect } from 'react'
import {
  useParams
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStoryById, storiesSelector } from '../../features/story/storySlice'

export default function Dashboard (props) {
  const { id } = useParams()

  const dispatch = useDispatch()
  const stories = useSelector(storiesSelector)
  const story = stories.find(story => story.id === +id)

  useEffect(() => {
    dispatch(fetchStoryById(id))
  }, [dispatch])

  return (
    <main className='container mx-auto'>
      <div>Story {story && story.id}</div>
    </main>
  )
}
