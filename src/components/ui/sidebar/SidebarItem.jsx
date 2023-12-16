import { Link } from 'react-router-dom';

export default function SidebarItem({ children, icon, path }) {
	return (
		<Link
			className='w-full rounded-full py-2 px-4 flex gap-3 items-center'
			to={path}
		>
			<span className='text-lg'>{icon}</span>
			<span>{children}</span>
		</Link>
	);
}
