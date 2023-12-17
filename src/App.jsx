import { useSelector, useDispatch } from 'react-redux';
import HomePage from '@pages/HomePage';
import { authActions, selectUser } from '@store/auth-slice';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';
import AuthPage from '@components/auth/Auth';
import { getAuthenticatedUser } from '@utils/auth-utils';
import { Player } from '@lottiefiles/react-lottie-player';
import MainLoadingPage from '@pages/MainLoadingPage';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	console.log(loading);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setLoading(true);
			if (user) {
				dispatch(authActions.login(getAuthenticatedUser(user)));
			} else {
				dispatch(authActions.logout());
			}
			setLoading(false);
		});
	}, [dispatch]);
	const content = user ? <HomePage /> : <AuthPage />;
	return (
		<>
			{loading && <MainLoadingPage />}
			{!loading && content}
		</>
	);
}

export default App;
