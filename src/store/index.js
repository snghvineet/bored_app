import { configureStore } from '@reduxjs/toolkit';
import activitySlice from './activity-slice';
import authSlice from './auth-slice';

const store = configureStore({
	reducer: { activity: activitySlice.reducer, auth: authSlice.reducer },
});

export default store;
