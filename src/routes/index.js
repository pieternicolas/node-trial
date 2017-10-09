import responder from './../util/responder.js';
import swaggerFile from './../../swagger.json';


import noteRoutes from './note_routes.js';
import userRoutes from './user_routes.js';


export default ( app ) => {

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
	

	userRoutes(app);
	noteRoutes(app);
	// Other route groups could go here, in the future

	app.all('*', (req, res, next) => {
		responder(res, next, { status: 404, data: 'Endpoint does not exist' });
	});

};