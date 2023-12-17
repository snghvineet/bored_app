import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './store/index.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ActivitiesPage from '@pages/ActivitiesPage.jsx';
import ErrorPage from '@pages/ErrorPage.jsx';
import DashboardPage from '@pages/DashboardPage.jsx';
import AuthPage from '@components/auth/Auth.jsx';
import MainLoadingPage from '@pages/MainLoadingPage.jsx';
import { auth } from './firebase.config.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,

		errorElement: <ErrorPage />,
		children: [
			{ path: 'activities', element: <ActivitiesPage /> },
			{ path: 'dashboard', element: <DashboardPage /> },
		],
	},
	{
		path: '/auth',
		element: <AuthPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
