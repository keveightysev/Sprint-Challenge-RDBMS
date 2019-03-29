exports.seed = knex => {
	return knex('actions').insert([
		{
			description: 'Do dishes',
			notes: 'Use Dawn dish soap',
			completed: false,
			project_id: 1,
		},
		{
			description: 'Mop floor',
			notes: "That's the power of Pine Sol, baby",
			completed: false,
			project_id: 1,
		},
		{ description: 'Complete MVP', notes: '', completed: false, project_id: 2 },
		{
			description: 'Complete Stretch Goals',
			notes: '',
			completed: false,
			project_id: 2,
		},
	]);
};
