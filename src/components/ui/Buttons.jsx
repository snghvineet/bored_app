import { twMerge } from 'tailwind-merge';

export function FilledButton({ children, icon, variant, onClick, className }) {
	let bgColor = 'bg-indigo-600 text-white border-2 border-indigo-600';
	if (variant === 'flat') bgColor = 'bg-indigo-200 text-zinc-800';
	if (variant === 'secondary')
		bgColor = 'border-2 border-gray-300 text-zinc-700';
	return (
		<button
			onClick={onClick}
			className={twMerge(
				'flex px-5 py-2 gap-2 rounded-full items-center justify-center',
				bgColor,
				className
			)}
		>
			{icon && <span>{icon}</span>}
			<span className='font-medium'>{children}</span>
		</button>
	);
}

export function IconButton({ children, onClick, text }) {
	return (
		<button
			className='flex h-8 justify-center items-center gap-2 font-medium'
			onClick={onClick}
			type='button'
		>
			{children}
			{text && <span>{text}</span>}
		</button>
	);
}

export function TextButton({ children, onClick, icon }) {
	return (
		<button
			className='flex h-8 justify-center items-center gap-2 font-medium'
			onClick={onClick}
			type='button'
		>
			{icon && <span>{icon}</span>}
			<span className='font-medium'>{children}</span>
		</button>
	);
}

export function GoogleButton({ children, svg, onClick }) {
	return (
		<button
			type='button'
			className='bg-gray-100 flex items-center font-medium justify-center rounded-full'
			onClick={onClick}
		>
			<img src={svg} />
			<span>{children}</span>
		</button>
	);
}
