import React from 'react';
import { useSelector } from 'react-redux';
import {
	FaCheck,
	FaCircleExclamation,
	FaAward,
	FaEllipsis,
	FaHourglassHalf,
} from 'react-icons/fa6'; // Import necessary icons
import { ActivityStatus, getColorStyleByTag } from '@utils/tag-utils';
import SummaryItem from './SummaryItem';

function ActivitySummary() {
	const activities = useSelector((state) => state.activity.activities); // Update to 'activity' slice

	const getStatusCount = (status) =>
		activities.filter((activity) => activity.status === status).length;

	const completedCount = getStatusCount(ActivityStatus.COMPLETED);
	const inProgressCount = getStatusCount(ActivityStatus.IN_PROGRESS);
	const failedCount = getStatusCount(ActivityStatus.FAILED);
	const total = completedCount + inProgressCount + failedCount;

	return (
		<div className='bg-gray-50 grid grid-cols-3 gap-4 rounded-lg p-4'>
			<SummaryItem
				title={{ text: 'Completed Activities', icon: <FaAward /> }}
				color={getColorStyleByTag(ActivityStatus.COMPLETED)}
				count={completedCount}
				total={total}
			/>
			<SummaryItem
				title={{ text: 'Ongoing Activities', icon: <FaHourglassHalf /> }}
				color={getColorStyleByTag(ActivityStatus.IN_PROGRESS)}
				count={inProgressCount}
				total={total}
			/>
			<SummaryItem
				title={{
					text: 'Failed Activities  ',
					icon: <FaCircleExclamation />,
				}}
				color={getColorStyleByTag(ActivityStatus.FAILED)}
				count={failedCount}
				total={total}
			/>
		</div>
	);
}

export default ActivitySummary;
