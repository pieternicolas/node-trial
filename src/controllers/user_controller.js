import uuid from 'uuid';
import { userModel } from './../models/';


import auth from './../middleware/auth.js';


export default {

	createUser: async ( app, data ) => {
		const identity = {
			_id: uuid.v4(),
			firstName: data.firstName,
			lastName: data.lastName,
			username: data.username,
			email: data.email,
			password: auth.hash( data.password )
		};

		const result = await userModel.createUser(identity)
			.then(res => {
				if (!res) {
					return { status: 404 };
				} else {
					return { status: 200, data: res };
				};
			})
			.catch(err => {
				return new Error(err);
			});

		return result;
	}

};