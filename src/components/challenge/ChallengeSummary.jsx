import React from 'react';

function ChallengeSummary({
	acceptedCount,
	rejectedCount,
	completedCount,
	failedCount,
}) {
	return (
		<div>
			<h2>Challenge Summary</h2>
			<ul>
				<li>Accepted Challenges: {acceptedCount}</li>
				<li>Rejected Challenges: {rejectedCount}</li>
				<li>Completed Challenges: {completedCount}</li>
				<li>Failed Challenges: {failedCount}</li>
			</ul>
		</div>
	);
}

export default ChallengeSummary;
