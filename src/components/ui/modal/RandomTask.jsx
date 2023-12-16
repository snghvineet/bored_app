import { useEffect, useState } from 'react';
import { IoPeople } from 'react-icons/io5';
import { FaMoneyCheckDollar, FaMountainSun } from 'react-icons/fa6';
import { FilledButton } from '@components/ui/Buttons';
import { useDispatch } from 'react-redux';
import { fetchAndTransformRandomActivity } from '@utils/activity-utils';
import { activityActions } from '@store/activity-slice';
import ChallengeAttribute from '@components/challenge/ChallengeAttribute';

export default function RandomTask({ close }) {
	const [activity, setActivity] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		async function perform() {
			try {
				const activity = await fetchAndTransformRandomActivity();
				setActivity(activity);
			} catch (error) {
				console.error('Error fetching activity:', error);
			}
		}
		perform();
	}, []);

	function acceptTaskHandler() {
		if (!activity) return;
		dispatch(activityActions.addActivity(activity));
		close();
	}

	return (
		<div className='w-full'>
			<h1 className='font-medium text-3xl mb-1'>Your Challenge</h1>

			{!activity ? (
				'Loading...'
			) : (
				<div className='flex flex-col gap-2'>
					{/* Display transformed activity details */}
					<p>{activity.name}</p>
					<div>
						<p className='mb-2'>{activity.activity}</p>

						<div className='grid grid-cols-2 gap-y-1'>
							<ChallengeAttribute
								icon={<IoPeople />}
								content={activity.stats.participants}
							/>
							<ChallengeAttribute
								icon={<FaMoneyCheckDollar />}
								content={activity.stats.price}
							/>
							<ChallengeAttribute
								icon={<FaMountainSun />}
								content={activity.stats.accessibility}
							/>
						</div>
					</div>
					<div className='flex justify-end gap-2 mt-2'>
						<FilledButton variant='secondary' onClick={close}>
							Decline
						</FilledButton>
						<FilledButton onClick={acceptTaskHandler}>Accept</FilledButton>
					</div>
				</div>
			)}
		</div>
	);
}
