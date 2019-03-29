const db = require('../data/dbConfig.js');

module.exports = { getProjects, addProject };

function getProjects() {
	return db('projects');
}

async function addProject(project) {
	const [id] = await db('projects').insert(project);
	return db('projects')
		.where({ id })
		.first();
}
