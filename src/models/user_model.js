import connect from './../util/database.js';
const db = connect.mysql();


export default {

	createUser: ( data, done ) => {
		return new Promise ((resolve, reject) => {
			const sql = 'INSERT INTO users VALUES (?,?,?,?,?,?)';
			const values = Object.keys(data).map(key => {
				return data[key];
			});

			db.query(sql, values, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				};
			});
		});
	}

};