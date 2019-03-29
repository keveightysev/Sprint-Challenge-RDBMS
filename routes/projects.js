const express = require('express');
const Projects = require('../models/projects.js');
const actionsRouter = require('./actions.js');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const projects = await Projects.getProjects();
		res.status(200).json(projects);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	if (!req.body.name) {
		res.status(406).json({ message: 'Please enter a name for the project' });
		return;
	} else if (!req.body.description) {
		res
			.status(406)
			.json({ message: 'Please enter a description for the project' });
		return;
	}
	try {
		const project = await Projects.addProject(req.body);
		res.status(201).json(project);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:projectId', async (req, res) => {
	try {
		const project = await Projects.getProjectById(req.params.projectId);
		if (project.length > 0) {
			const { id, name, description, completed } = project[0];
			const actions = project.map(action => {
				return {
					id: action.actionId,
					description: action.actionDesc,
					notes: action.actionNotes,
					completed: action.actionComp,
				};
			});
			res.status(200).json({ id, name, description, completed, actions });
		} else {
			res.status(404).json({ message: 'No project found with that ID' });
		}
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ message: 'Server error retrieving project information' });
	}
});

router.use(
	'/:projectId/actions',
	(req, res, next) => {
		req.projectId = req.params.projectId;
		next();
	},
	actionsRouter,
);

module.exports = router;
