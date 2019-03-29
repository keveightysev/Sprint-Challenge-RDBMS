const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routes/projects.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/projects', projectsRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`\n*** Server running at http://localhost:${port} ***\n`);
});
