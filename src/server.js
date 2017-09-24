import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

import config from './config/';

const MongoClient = mongodb.MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(config.db, (err, database) => {
	if (err) return console.log(err);
	
	require('./routes')(app, database);

	app.listen(config.port, () => {
		console.log('We are live on ' + config.port);
	});
});