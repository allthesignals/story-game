import { configureStore } from '@reduxjs/toolkit'

import storyReducer from '../features/story/storySlice'

export const store = configureStore({
  reducer: {
    story: storyReducer
  }
})
