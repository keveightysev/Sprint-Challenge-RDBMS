const db = require('../data/dbConfig.js');

module.exports = { getActions, addAction };

function getActions(projectId) {
	return db('actions').where({ project_id: projectId });
}

async function addAction(project) {
	const [id] = await db('actions').insert(project);
	return db('actions')
		.where({ id })
		.first();
}
