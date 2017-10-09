import { MongoClient } from 'mongodb';
import mysql from 'mysql';
import { mongo_conf, mysql_conf } from '~/config/';


export default {

	mongodb: async () => {
		let conn;
		await MongoClient.connect( mongo_conf )
			.then(database => {
				conn = database;
			})
			.catch(err => {
				throw err;
			});
		return conn;
	},

	mysql: () => {
		const conn = mysql.createConnection( mysql_conf );
		conn.connect();
		return conn;
	}

};