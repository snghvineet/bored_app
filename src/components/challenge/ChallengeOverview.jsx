import React from 'react';

function ChallengeOverview({ challenges }) {
	return (
		<div>
			<h2>Challenge Overview</h2>
			<ul>
				{challenges.map((challenge) => (
					<li key={challenge.id}>
						{challenge.type} - {challenge.status}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ChallengeOverview;
