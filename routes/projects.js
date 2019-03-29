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

module.exports = router;
