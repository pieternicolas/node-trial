import { MongoClient } from 'mongodb';
import mysql from 'mysql';
import { mongo } from './../config/';


export default {

	mongodb: async () => {
		let conn;
		await MongoClient.connect(mongo)
			.then(database => {
				conn = database;
			})
			.catch(err => {
				throw err;
			});
		return conn;
	},

	mysql: () => {
		const conn = mysql.createConnection({
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'node_trial'
		});
		conn.connect();
		return conn;
	}

};