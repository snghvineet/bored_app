const tagColors = new Map();
tagColors.set('in progress', 'yellow');
tagColors.set('completed', 'green');
tagColors.set('failed', 'red');
tagColors.set('education', 'lime');
tagColors.set('social', 'purple');
tagColors.set('music', 'orange');
tagColors.set('relaxation', 'orange');
export function colorPicker() {}

export const ActivityStatus = {
	IN_PROGRESS: 'in progress',
	COMPLETED: 'completed',
	FAILED: 'failed',
};

export function getColorStyleByTag(tag) {
	const colorStyle = {
		text: `text-purple-600`,
		lead: 'bg-purple-600',
		bg: 'bg-purple-100',
	};

	if (tag === ActivityStatus.IN_PROGRESS) {
		colorStyle.bg = 'bg-yellow-100';
		colorStyle.text = 'text-yellow-600';
		colorStyle.lead = 'bg-yellow-600';
	} else if (tag === ActivityStatus.COMPLETED) {
		colorStyle.bg = 'bg-green-100';
		colorStyle.text = 'text-green-600';
		colorStyle.lead = 'bg-green-600';
	}

	return colorStyle;
}
