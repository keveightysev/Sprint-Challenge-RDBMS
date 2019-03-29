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

router.use(
	'/:projectId/actions',
	(req, res, next) => {
		req.projectId = req.params.projectId;
		next();
	},
	actionsRouter,
);

module.exports = router;
