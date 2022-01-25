import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
    },
    getStoryLoading: state => {
      state.loading = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoryById.fulfilled, (state, action) => {
      state.stories.push(action.payload)
    })
  }
})

// Action creators are generated for each case reducer function
export const { getStories, getStoriesSuccess, getStoriesFailure, getStoryLoading } = storySlice.actions

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

export const fetchStoryById = createAsyncThunk(
  'stories/fetchById',
  async (id) => {
    const response = await fetch(`http://localhost:3001/stories/${id}`)
    const data = await response.json()

    return data
  }
)
