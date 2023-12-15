import { twMerge } from 'tailwind-merge';
import { ActivityStatus, getColorStyleByTag } from '../../utils/tag-utils';
export default function ChallengeLabel({ text }) {
	const label = text.charAt(0).toUpperCase() + text.slice(1);
	const colorStyle = getColorStyleByTag(text);

	return (
		<div
			className={twMerge(
				'flex items-center gap-1 bg-purple-100 w-fit px-3 py-1 rounded-full text-sm',
				colorStyle.bg
			)}
		>
			<div
				className={twMerge(
					'h-3 w-3 rounded-full',
					`bg-purple-600`,
					colorStyle.lead
				)}
			/>
			<span className={twMerge('text-purple-600 font-medium', colorStyle.text)}>
				{label}
			</span>
		</div>
	);
}
