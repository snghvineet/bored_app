import { createSlice } from '@reduxjs/toolkit';
import { ActivityStatus } from '../utils/tag-utils';

const activitySlice = createSlice({
	name: 'activities',
	initialState: { activities: [], filter: null, status: 'IN_PROGRESS' },
	reducers: {
		addActivity(state, { payload }) {
			payload.status = ActivityStatus.IN_PROGRESS;
			state.activities.push(payload);
		},
		markAsComplete(state, { payload: id }) {
			const existingActivity = state.activities.find(
				(activity) => activity.key === id
			);
			if (!existingActivity) return;
			existingActivity.status = ActivityStatus.COMPLETED;
		},
	},
});

const activityActions = activitySlice.actions;
export { activityActions };
export default activitySlice;
