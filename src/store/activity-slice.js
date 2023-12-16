import { createSlice } from '@reduxjs/toolkit';
import { ActivityStatus } from '../utils/tag-utils';

const activitySlice = createSlice({
	name: 'activities',
	initialState: {
		activities: [],
		filter: null,
		status: ActivityStatus.IN_PROGRESS,
	},
	reducers: {
		setStatusFilter(state, { payload: status }) {
			state.status = status;
		},
		addActivity(state, { payload }) {
			payload.tags = [payload.type];
			payload.status = ActivityStatus.IN_PROGRESS;
			state.activities.push(payload);
		},
		markAsComplete(state, { payload: id }) {
			const existingActivity = state.activities.find(
				(activity) => activity.id === id
			);
			if (existingActivity) {
				existingActivity.status = ActivityStatus.COMPLETED;
			}
		},
	},
});

const activityActions = activitySlice.actions;
export { activityActions };
export default activitySlice;
