import "babel-polyfill";
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

MongoClient.connect(config.db)
	.then(database => {
		routes(app, database);

		app.listen(config.port, () => {
			console.log('We are live on ' + config.port);
		});
	})
	.catch(error => {
		console.log(err);
	});