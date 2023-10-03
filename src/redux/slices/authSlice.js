import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLoginStatus } = authSlice.actions;
export default authSlice.reducer;
