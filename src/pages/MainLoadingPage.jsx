import React from 'react';
import GearSpinner from '@assets/bouncing-circles.svg?react';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from '@assets/loading_animation_lottie.json';

export default function MainLoadingPage() {
	return (
		<div className='flex flex-col  w-full h-full items-center justify-center'>
			<Player autoplay loop src={loadingAnimation} className='w-48 h-48' />
			<h1 className='text-3xl text-gray-700 mt-2 text-center'>Loading...</h1>
		</div>
	);
}
