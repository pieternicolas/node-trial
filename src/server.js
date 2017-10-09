import 'babel-polyfill';
import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import { port } from '~/config/';
import routes from './routes/';
import connect from './util/database.js';


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


routes(app);


if (process.env.NODE_ENV != 'test')	{
	app.listen(port, () => {
		console.log('We are live on ' + port);
	});
};


export default app;