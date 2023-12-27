
import { createSlice } from '@reduxjs/toolkit'



interface initialState {user: any | null, loading:boolean, error:boolean, token:string | null } 


const initialState:initialState = {
    user: null,
    loading: false,
    error: false, 
    token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
        state.error = false;
      },
      fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },
      fetchSuccess: (state) => {
        state.loading = false;
        state.error = false;
      },
      loginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.token = action.payload?.key;    
        
      },
      logoutSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
      },
      registerSuccess: (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.token = payload?.token;
        state.error = false;
  },

}})

// Action creators are generated for each case reducer function
export const { fetchStart,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
    fetchFail, fetchSuccess } = authSlice.actions

export default authSlice.reducer