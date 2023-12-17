import React from 'react';
import { FilledButton } from '../Buttons';
import { MdLogout } from 'react-icons/md';

export default function Navbar() {
	return (
		<nav className='flex h-16 bg-zinc-800 w-full items-center px-4 justify-between'>
			<div className='text-2xl text-white font-medium tracking-wide'>
				Feeling Bored
			</div>
			<div>
				<FilledButton icon={<MdLogout />}>Sign out</FilledButton>
			</div>
		</nav>
	);
}
