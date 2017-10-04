import noteRoutes from './note_routes.js';
import responder from './../util/responder.js';
import swaggerFile from './../../swagger.json';

export default ( app, db ) => {
	app.get('/', (req, res) => {
		res.status(200).send('Hello to node trial');
	});

	app.get('/swagger.json', (req, res, next) => {
		if (swaggerFile) {
			res.status(200).send(swaggerFile);
		} else {
			responder(res, next, { status: 404 });
		};
	});

	noteRoutes(app, db);
	// Other route groups could go here, in the future
};