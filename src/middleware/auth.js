import bcrypt from 'bcrypt';


export default {

	hash: (data) => {
		return bcrypt.hashSync(data, 10);
	}

};