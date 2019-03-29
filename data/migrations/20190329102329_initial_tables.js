exports.up = function(knex) {
	return knex.schema
		.createTable('projects', table => {
			table.increments();
			table.string('name').notNullable();
			table.string('description').notNullable();
			table.boolean('completed');
		})

		.createTable('actions', table => {
			table.increments();
			table.string('description').notNullable();
			table.string('notes');
			table.boolean('completed').notNullable();
			table
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('contexts', table => {
			table.increments();
			table.string('location').notNullable();
		})

		.createTable('actions_contexts', table => {
			table.increments();
			table
				.integer('action_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('actions')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.integer('context_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('contexts')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('actions_contexts')
		.dropTableIfExists('contexts')
		.dropTableIfExists('actions')
		.dropTableIfExists('projects');
};
