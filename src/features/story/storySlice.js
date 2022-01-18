import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  hasErrors: false,
  stories: []
}

export const storySlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    getStories: state => {
      state.loading = true
    },
    getStoriesSuccess: (state, { payload }) => {
      state.stories = payload
      state.loading = false
      state.hasErrors = false
    },
    getStoriesFailure: state => {
      state.loading = false
      state.hasErrors = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { getStories, getStoriesSuccess, getStoriesFailure } = storySlice.actions

// A selector
export const storiesSelector = (state) => {
  return state.story.stories
}

// The reducer
export default storySlice.reducer

// Asynchronous thunk action
export function fetchStories () {
  return async dispatch => {
    dispatch(getStories())

    try {
      const response = await fetch('http://localhost:3001/stories')
      const data = await response.json()

      dispatch(getStoriesSuccess(data))
    } catch (error) {
      dispatch(getStoriesFailure())
    }
  }
}
