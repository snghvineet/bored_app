import { createSelector } from '@reduxjs/toolkit';
// Selector function to get the activities from the Redux store
const allActivities = (state) => state.activity.activities;
const status = (state) => state.activity.status;
export const selectActivities = createSelector(
	[allActivities, status],
	(activities, status) =>
		activities.filter((activity) => activity.status === status)
);
