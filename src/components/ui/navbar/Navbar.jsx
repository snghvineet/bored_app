import { useDispatch } from 'react-redux';
import { FilledButton, IconButton } from '../Buttons';
import { MdLogout } from 'react-icons/md';
import { authActions } from '@store/auth-slice';
import { signOut } from 'firebase/auth';
import { auth } from 'src/firebase.config';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';
import { SidebarModal } from '../sidebar/Sidebar';

export default function Navbar() {
	const [showSidebar, setShowSidebar] = useState(false);
	const dispatch = useDispatch();
	async function logoutHandler() {
		await signOut(auth);
		dispatch(authActions.logout());
	}

	function openSidebar() {
		setShowSidebar(true);
	}
	function closeSidebar() {
		setShowSidebar(false);
	}

	return (
		<nav className='flex h-16 bg-zinc-800 w-full items-center px-4'>
			{showSidebar && <SidebarModal />}
			<IconButton className='text-white text-xl' onClick={openSidebar}>
				<FaBars />
			</IconButton>
			<div className='px-8 text-2xl text-white font-medium tracking-wide'>
				Feeling Bored
			</div>
			<div className='flex-grow flex justify-end'>
				<FilledButton icon={<MdLogout />} onClick={logoutHandler}>
					Sign out
				</FilledButton>
			</div>
		</nav>
	);
}
