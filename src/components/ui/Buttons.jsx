import { twMerge } from 'tailwind-merge';

export function FilledButton({ children, icon, variant, onClick }) {
	let bgColor = 'bg-indigo-600 text-white';
	if (variant === 'flat') bgColor = 'bg-indigo-200 text-zinc-800';
	if (variant === 'secondary')
		bgColor = 'border-2 border-gray-300 text-zinc-700';
	return (
		<button
			onClick={onClick}
			className={twMerge(
				'flex px-3 py-1 gap-2 rounded-lg items-center ',
				bgColor
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
		>
			{children}
			{text && <span>{text}</span>}
		</button>
	);
}
