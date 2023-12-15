import ActivityItem from './ActivityItem';
import { useSelector } from 'react-redux';

export default function ActivityList({ statusFilter }) {
	const activities = useSelector((state) =>
		state.activity.activities.filter(
			(activity) => activity.status === statusFilter
		)
	);
	return (
		<div>
			{activities.length > 0 ? (
				<ol className='flex flex-col gap-2 px-4 py-4'>
					{activities.map((activity) => (
						<ActivityItem key={activity.key} activity={activity} />
					))}
				</ol>
			) : (
				<div className='p-4 flex h-24 items-center justify-center text-xl'>
					Seems empty here...
				</div>
			)}
		</div>
	);
}
