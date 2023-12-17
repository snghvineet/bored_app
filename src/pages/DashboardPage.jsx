import ActivitySummary from '@components/activities/ActivitySummary';
import { selectUser } from '@store/auth-slice';
import { getCurrentFormattedDate } from '@utils/date-utils';
import { useSelector } from 'react-redux';

function DashboardPage() {
	const user = useSelector(selectUser);
	return (
		<div>
			<div className='h-32 justify-end   flex flex-col-reverse'>
				<h1 className='text-5xl'>Hi, {user.displayName}</h1>
				<h3 className='text-gray-500 font-medium mb-1'>
					{getCurrentFormattedDate()}
				</h3>
			</div>
			<ActivitySummary />
		</div>
	);
}

export default DashboardPage;
