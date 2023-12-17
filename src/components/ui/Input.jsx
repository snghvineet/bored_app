import React from 'react';

export function TextInput({ label, register, options, error, type }) {
	console.log(error);
	return (
		<div className='flex flex-col gap-1 mb-1'>
			<label className='font-medium text-sm'>{label}</label>
			<input
				type={type}
				className='border-b-2 px-4 py-2 border-neutral-300 focus:border-neutral-700 outline-none'
				{...register(label, options)}
			/>
		</div>
	);
}
