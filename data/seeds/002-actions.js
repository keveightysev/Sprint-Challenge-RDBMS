exports.seed = knex => {
	return knex('actions').insert([
		{
			description: 'Do dishes',
			notes: 'Use Dawn dish soap',
			project_id: 1,
		},
		{
			description: 'Mop floor',
			notes: "That's the power of Pine Sol, baby",
			project_id: 1,
		},
		{ description: 'Complete MVP', notes: '', project_id: 2 },
		{
			description: 'Complete Stretch Goals',
			notes: '',
			project_id: 2,
		},
	]);
};
