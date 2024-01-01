import { LuSwords } from 'react-icons/lu';
import { TbDashboard } from 'react-icons/tb';
import { IoClose, IoSettingsOutline } from 'react-icons/io5';

import SidebarItem from './SidebarItem';
import { createPortal } from 'react-dom';
import { IconButton } from '../Buttons';

const sidebarItems = [
	{ id: '1', text: 'Activities', icon: <LuSwords />, path: '/activities' },
	{ id: '2', text: 'Dashboard', icon: <TbDashboard />, path: '/dashboard' },
	{
		id: '3',
		text: 'Settings',
		icon: <IoSettingsOutline />,
		path: '/settings',
	},
];

export default function Sidebar() {
	return (
		<aside className='w-1/4 bg-stone-100 m-3 rounded-lg px-4 py-2 hidden md:block'>
			<ol className='flex flex-col gap-1'>
				{sidebarItems.map((item) => (
					<SidebarItem key={item.id} icon={item.icon} path={item.path}>
						{item.text}
					</SidebarItem>
				))}
			</ol>
		</aside>
	);
}

function SidebarContent() {
	return;
}

export function SidebarModal() {
	return createPortal(
		<div className='fixed top-0 left-0 w-1/4 bg-neutral-800 h-full border-gray-700 my-[1px] border-r shadow-sidebar rounded-r-2xl z-20'>
			<IconButton className='text-gray-300 text-2xl absolute right-2 top-2'>
				<IoClose />
			</IconButton>
		</div>,
		document.getElementById('modal-root')
	);
}
