import noteRoutes from './note_routes.js';
import swaggerFile from './../../swagger.json';

export default function ( app, db ) {
	app.get('/', (req, res) => {
		res.status(200).send('Hello to node trial');
	});

	app.get('/swagger.json', (req, res) => {
		if (swaggerFile) {
			res.status(200).send(swaggerFile);
		} else {
			res.send(404);
		};
	});

	noteRoutes(app, db);
	// Other route groups could go here, in the future
};