import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null, // Initial user state
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const selectUser = (state) => state.auth.user;

export const authActions = authSlice.actions;
export default authSlice;
