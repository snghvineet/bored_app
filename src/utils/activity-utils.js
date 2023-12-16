import axios from 'axios';

/**
 * @typedef {object} Activity
 * @property {string} id - The ID of the activity.
 * @property {string} name - The name of the activity.
 * @property {object} stats - Stats of the activity.
 * @property {number} stats.participants - Number of participants.
 * @property {number} stats.price - Price value.
 * @property {number} stats.accessibility - Accessibility value.
 * @property {string} type - Type of the activity.
 * @property {string} link - Link to more information about the activity.
 */

/**
 * @typedef {object} TransformedActivity
 * @property {string} id - The ID of the transformed activity.
 * @property {string} name - The name of the transformed activity.
 * @property {object} stats - Stats of the transformed activity.
 * @property {number} stats.participants - Number of participants for the transformed activity.
 * @property {number} stats.price - Price value for the transformed activity.
 * @property {number} stats.accessibility - Accessibility value for the transformed activity.
 * @property {string} type - Type of the transformed activity.
 * @property {string} link - Link to more information about the transformed activity.
 */

/**
 * Transforms the Bored API response object to a custom format.
 *
 * @param {object} data - The Bored API response object.
 * @returns {Activity} The transformed activity object.
 */
function transformBoredApiResponse(data) {
	if (!data) return null;

	const transformedData = {
		id: data.key,
		name: data.activity,
		stats: {
			participants: data.participants,
			price: data.price,
			accessibility: data.accessibility,
		},
		type: data.type,
		link: data.link,
	};

	return transformedData;
}

/**
 * Fetches a random activity from the Bored API and transforms the response.
 *
 * @returns {Promise<Activity|null>} A promise that resolves to the transformed activity object, or null on failure.
 */
export async function fetchAndTransformRandomActivity() {
	try {
		const response = await axios.get('https://www.boredapi.com/api/activity');
		const randomActivity = response.data;
		const transformedActivity = transformBoredApiResponse(randomActivity);
		return transformedActivity;
	} catch (error) {
		console.error('Error fetching and transforming activity:', error);
		return null;
	}
}
