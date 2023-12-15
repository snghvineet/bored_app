import { FaPlus } from 'react-icons/fa6';
import { LuSwords } from 'react-icons/lu';
import Tabbar from '../tabbar/Tabbar';
import { FilledButton } from '../ui/Buttons';
import ActivityList from './ActivityList';
import Modal from '../ui/modal/Modal';
import { useRef, useState } from 'react';
import RandomTask from '../ui/modal/RandomTask';
import { ActivityStatus } from '../../utils/tag-utils';

export default function Activities() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [tabIndex, setTabIndex] = useState(0);
	const tabs = [
		{ status: ActivityStatus.IN_PROGRESS, text: 'In Progress' },
		{ status: ActivityStatus.COMPLETED, text: 'Completed' },
		{ status: ActivityStatus.FAILED, text: 'Failed' },
	];

	function changeTabHandler(index) {
		setTabIndex(index);
	}

	function openModal() {
		setModalIsVisible(true);
	}
	function closeModal() {
		setModalIsVisible(false);
	}
	return (
		<div className='w-full m-3'>
			{modalIsVisible && (
				<Modal close={closeModal}>
					<RandomTask close={closeModal} />
				</Modal>
			)}
			<div className='flex justify-between'>
				<Tabbar tabs={tabs} activeTab={tabIndex} handler={changeTabHandler} />
				<div className='flex gap-4 px-4 py-2'>
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
