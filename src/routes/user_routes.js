import responder from './../util/responder.js';
import { userController } from './../controllers/';
import userValidate from './../middleware/validators/user.js';

const { validationResult } = require('express-validator/check');


export default (app) => {

	app.post( '/user', userValidate, (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			responder(res, next, { status: 422, data: errors.mapped() });
			return;
		};

		userController.createUser(app, req.body)
			.then(response => {
				responder(res, next, response);
			})
			.catch(error => {
				responder(res, next);
			});
	});
	
};