exports.seed = knex => {
	return knex('projects').insert([
		{
			name: 'Clean Kitchen',
			description: 'The kitchen needs to be cleaned',
			completed: false,
		},
		{
			name: 'Complete Sprint Challenge',
			description: 'The spring challenge for this week needs to be completed',
			completed: false,
		},
	]);
};
