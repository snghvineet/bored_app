import { useDispatch } from 'react-redux';
import { FilledButton } from '../Buttons';
import { MdLogout } from 'react-icons/md';
import { authActions } from '@store/auth-slice';
import { signOut } from 'firebase/auth';
import { auth } from 'src/firebase.config';

export default function Navbar() {
	const dispatch = useDispatch();
	async function logoutHandler() {
		await signOut(auth);
		dispatch(authActions.logout());
	}
	return (
		<nav className='flex h-16 bg-zinc-800 w-full items-center px-4 justify-between'>
			<div className='text-2xl text-white font-medium tracking-wide'>
				Feeling Bored
			</div>
			<div>
				<FilledButton icon={<MdLogout />} onClick={logoutHandler}>
					Sign out
				</FilledButton>
			</div>
		</nav>
	);
}
