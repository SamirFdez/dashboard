import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // state can be 'checking' | 'authenticated' | 'no-authenticated';
    state: 'no-authenticated'
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateAuthenticationState: (state, {payload}) => {
      state.state = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateAuthenticationState } = authenticationSlice.actions

export default authenticationSlice.reducer