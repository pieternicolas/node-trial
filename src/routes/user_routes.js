import responder from './../util/responder.js';
import { userController } from './../controllers/';


export default (app) => {

	app.post( '/user', (req, res, next) => {
		userController.createUser(app, req.body)
			.then(response => {
				responder(res, next, response);
			})
			.catch(error => {
				responder(res, next);
			});
	});
	
};