import 'babel-polyfill';
import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import config from './config/';
import routes from './routes/';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let db;
async function connect() { 
	await MongoClient.connect(config.db)
		.then(database => {
			db = database;
		})
		.catch(err => {
			throw err;
		});
};


if (process.env.NODE_ENV != 'test')	{
	connect()
		.then(() => {
			routes(app, db);

			app.listen(config.port, () => {
				console.log('We are live on ' + config.port);
			});
		});
} else {
	connect();
	routes(app, db);
};


export default app;