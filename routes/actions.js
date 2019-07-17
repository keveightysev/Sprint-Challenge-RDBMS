const express = require('express');
const Actions = require('../models/actions.js');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const actions = await Actions.getActions(req.projectId);
		res.status(200).json(actions);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	if (!req.body.description) {
		res
			.status(406)
			.json({ message: 'Please enter a description for the action' });
		return;
	}
	const newAction = {
		...req.body,
		project_id: req.projectId,
	};
	try {
		const action = await Actions.addAction(newAction);
		res.status(201).json(action);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
