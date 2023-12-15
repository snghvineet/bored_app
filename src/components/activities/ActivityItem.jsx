import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaCheck, FaMoneyCheckDollar, FaMountainSun } from 'react-icons/fa6';
import ChallengeAttribute from '../challenge/ChallengeAttribute';
import { IoPeople } from 'react-icons/io5';
import ChallengeLabel from '../challenge/ChallengeLabel';
import { IconButton } from '../ui/Buttons';
import { activityActions } from '../../store/activity-slice';

export default function ActivityItem({ activity }) {
	const dispatch = useDispatch();
	const [expanded, setExpanded] = useState(false);

	function changeActivityStatusToComplete() {
		dispatch(activityActions.markAsComplete(activity.key));
	}
	return (
		<li>
			<div className='border-2 rounded-lg px-6 py-3'>
				<div>
					<div>
						<h1 className='text-xl mb-2'>{activity.activity}</h1>
						<div className='flex w-full'>
							<div className='flex gap-2 flex-grow'>
								<ChallengeLabel text={activity.status} />
								{activity.tags.map((tag) => (
									<ChallengeLabel key={activity.key + tag} text={tag} />
								))}
							</div>
							<IconButton
								onClick={changeActivityStatusToComplete}
								text='Mark as completed'
							>
								<FaCheck />
							</IconButton>
						</div>
					</div>
				</div>
				{expanded && (
					<div className='mt-2'>
						<div className='grid grid-cols-3 gap-y-1'>
							<ChallengeAttribute
								icon={<IoPeople />}
								content={activity?.participants}
							/>
							<ChallengeAttribute
								icon={<FaMoneyCheckDollar />}
								content={activity?.price}
							/>
							<ChallengeAttribute
								icon={<FaMountainSun />}
								content={activity?.accessibility}
							/>
						</div>
					</div>
				)}
			</div>
		</li>
	);
}
