export default function ChallengeAttribute({ icon, content }) {
	return (
		<div className='flex items-center gap-2 text-gray-800'>
			<span className='text-xl'>{icon}</span>
			<span>{content}</span>
		</div>
	);
}
