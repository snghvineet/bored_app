export function getCurrentFormattedDate(format = 'en-US', options = {}) {
	const currentDate = new Date();
	const formattedDate = new Intl.DateTimeFormat(format, {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		...options, // Allow additional options to be passed
	}).format(currentDate);
	return formattedDate;
}
