import { LuSwords } from 'react-icons/lu';
import { TbDashboard } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';

import SidebarItem from './SidebarItem';

export default function Sidebar() {
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
	return (
		<aside className='w-1/4 bg-stone-100 m-3 rounded-lg px-4 py-2'>
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
