import React from 'react';
import GearSpinner from '@assets/bouncing-circles.svg?react';

export default function MainLoadingPage() {
	return (
		<div className='flex flex-col  w-full h-full items-center justify-center'>
			<iframe src='https://lottie.host/embed/2286560b-0adb-4278-bfc1-3c99ceccd770/bgEJV9g7N7.lottie'></iframe>
			<h1 className='text-3xl text-gray-700 mt-2 text-center'>Loading...</h1>
		</div>
	);
}
