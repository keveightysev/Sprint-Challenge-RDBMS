const db = require('../data/dbConfig.js');

module.exports = { getProjects, addProject, getProjectById };

function getProjects() {
	return db('projects');
}

async function addProject(project) {
	const [id] = await db('projects').insert(project);
	return db('projects')
		.where({ id })
		.first();
}

function getProjectById(id) {
	return db('projects')
		.join('actions', 'projects.id', 'actions.project_id')
		.select(
			'projects.id',
			'projects.name',
			'projects.description',
			'projects.completed',
			'actions.id as actionId',
			'actions.description as actionDesc',
			'actions.notes as actionNotes',
			'actions.completed as actionComp',
		)
		.where('projects.id', id);
}
