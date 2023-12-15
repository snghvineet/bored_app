import React from 'react';

export default function SidebarItem({ children, icon }) {
	return (
		<div className='w-full rounded-full py-2 px-4 flex gap-3 items-center'>
			<span className='text-lg'>{icon}</span>
			<span>{children}</span>
		</div>
	);
}
