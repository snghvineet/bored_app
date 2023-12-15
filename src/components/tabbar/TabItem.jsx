import React from 'react';

export default function TabItem({ text, active, onClick }) {
	return (
		<li>
			<button className='px-6 py-2' onClick={onClick}>
				{text}
			</button>
			{active && <div className='h-1  bg-indigo-600' />}
		</li>
	);
}
