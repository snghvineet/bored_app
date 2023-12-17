import { Outlet } from 'react-router-dom';
import Sidebar from '@components/ui/sidebar/Sidebar';
import Navbar from '@components/ui/navbar/Navbar';

function HomePage() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='flex w-full flex-grow'>
				<Sidebar />
				<div className='p-3 w-full'>
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default HomePage;
