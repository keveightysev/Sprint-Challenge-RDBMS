exports.seed = knex => {
	return knex('contexts').insert([
		{ location: 'kitchen' },
		{ location: 'office' },
		{ location: 'coffee shop' },
	]);
};
