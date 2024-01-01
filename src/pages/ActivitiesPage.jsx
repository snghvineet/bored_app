import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { LuSwords } from 'react-icons/lu';
import Tabbar from '@components/tabbar/Tabbar';
import { FilledButton } from '@components/ui/Buttons';

import Modal from '@components/ui/modal/Modal';
import RandomTask from '@components/ui/modal/RandomTask';
import { ActivityStatus } from '@utils/tag-utils';
import { useDispatch } from 'react-redux';
import { activityActions } from '@store/activity-slice';
import ActivityList from '@components/activities/ActivityList';

export default function ActivitiesPage() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [tabIndex, setTabIndex] = useState(0);
	const dispatch = useDispatch();
	const tabs = [
		{ status: ActivityStatus.IN_PROGRESS, text: 'In Progress' },
		{ status: ActivityStatus.COMPLETED, text: 'Completed' },
		{ status: ActivityStatus.FAILED, text: 'Failed' },
	];

	function changeTabHandler(index) {
		setTabIndex(index);
		dispatch(activityActions.setStatusFilter(tabs[index].status));
	}

	function openModal() {
		setModalIsVisible(true);
	}
	function closeModal() {
		setModalIsVisible(false);
	}
	return (
		<div className='w-full'>
			{modalIsVisible && (
				<Modal close={closeModal}>
					<RandomTask close={closeModal} />
				</Modal>
			)}
			<div className='flex justify-between'>
				<Tabbar tabs={tabs} activeTab={tabIndex} handler={changeTabHandler} />
				<div className='gap-4 px-4 py-2 hidden md:flex'>
					<FilledButton
						variant='secondary'
						icon={<LuSwords />}
						onClick={() => openModal()}
					>
						Feeling Bored
					</FilledButton>
					<FilledButton icon={<FaPlus />}>Create</FilledButton>
				</div>
			</div>
			<ActivityList statusFilter={tabs[tabIndex].status} />
		</div>
	);
}
