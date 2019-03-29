const express = require('express');
const Projects = require('../models/projects.js');

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
	} else if (!req.body.description) {
		res
			.status(406)
			.json({ message: 'Please enter a description for the project' });
	}
	try {
		const project = await Projects.addProject(req.body);
		res.status(201).json(project);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
