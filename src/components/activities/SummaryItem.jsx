import { getColorStyleByTag } from '@utils/tag-utils';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function SummaryItem({ title, color, count, total }) {
	return (
		<div className='w-full border-2 rounded-lg bg-white p-3'>
			<div className='flex flex-col gap-2 text-xl'>
				<div className='flex items-center gap-2'>
					<span className='text-gray-700'>{title.icon}</span>{' '}
					<Badge count={count} color={color} />
				</div>
				<span className='font-medium '>{title.text}</span>
				<PercentageBar count={count} color={color} total={total} />
			</div>
		</div>
	);
}
function PercentageBar({ total, count, color }) {
	if (!total) total = 1;
	const percentage = Math.min(100, Math.round((count * 100) / total));
	return (
		<div className={twMerge('h-2 w-full rounded-full relative', color.bg)}>
			<div
				className={twMerge('absolute h-2 rounded-full', color.lead)}
				style={{ width: `${percentage}%` }}
			/>
		</div>
	);
}
function Badge({ count, color }) {
	return (
		<div
			className={twMerge(
				'px-5 rounded-full text-center font-medium',
				color.bg,
				color.text
			)}
		>
			{count}
		</div>
	);
}
