import bcrypt from 'bcrypt-nodejs';


export default {

	hash: (data) => {
		return bcrypt.hashSync(data, 10);
	}

};