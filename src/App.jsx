import { Outlet } from 'react-router-dom';
import Sidebar from '@components/ui/sidebar/Sidebar';

function App() {
	return (
		<main className='flex h-full'>
			<Sidebar />
			<div className='p-3 w-full'>
				<Outlet />
			</div>
		</main>
	);
}

export default App;
