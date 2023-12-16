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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
