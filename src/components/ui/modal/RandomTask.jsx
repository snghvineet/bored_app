import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ChallengeAttribute from '../../challenge/ChallengeAttribute';
import { IoPeople } from 'react-icons/io5';
import { FaMoneyCheckDollar, FaMountainSun } from 'react-icons/fa6';
import ChallengeLabel from '../../challenge/ChallengeLabel';
import { FilledButton } from '../Buttons';
import { useDispatch } from 'react-redux';
import { activityActions } from '../../../store/activity-slice';

export default function RandomTask({ close }) {
	const [activity, setActivity] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		async function perform() {
			const res = await axios.get('http://www.boredapi.com/api/activity/');
			const activity = res.data;
			console.log(activity);
			activity.tags = [activity.type];
			return activity;
		}
		perform().then((data) => setActivity(data));
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
					<ChallengeLabel text={activity?.type} color='lime-300' />
					{/* <img
						className='h-32 w-32'
						src={images[activity?.type]?.src}
						alt={images[activity?.type]?.alt}
					/> */}
					<div>
						<p className='mb-2'>{activity?.activity}</p>

						<div className='grid grid-cols-2 gap-y-1'>
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
