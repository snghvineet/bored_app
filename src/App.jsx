import Activities from './components/activities/Activities';
import Sidebar from './components/ui/sidebar/Sidebar';

function App() {
	return (
		<main className='flex h-full'>
			<Sidebar />
			<Activities />
		</main>
	);
}

export default App;
