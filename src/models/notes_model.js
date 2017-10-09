import { ObjectID } from 'mongodb';
import connect from './../util/database.js';

let db;
connect.mongodb()
	.then(conn => {
		db = conn;
	});

export default {

	getNotes: async ( params ) => {
		let result;
		try {
			result = await db.collection('notes').find().toArray();
		} catch(e) {
			result = new Error(e);
		};
		return result;
	},


	getSingleNote: async ( params ) => {
		let result;
		const details = { '_id': new ObjectID(params) };
		try {
			result = await db.collection('notes').findOne(details);
		} catch(e) {
			result = new Error(e);
		};
		return result;
	},


	postNote: async ( data ) => {
		let result;
		try {
			result = await db.collection('notes').insert(data);
		} catch(e) {
			result = new Error(e);
		};
		return result.ops[0];
	},


	deleteNote: async ( params ) => {
		let result;
		const details = { '_id': new ObjectID(params) };
		try {
			result = await db.collection('notes').remove(details);
		} catch(e) {
			result = new Error(e);
		};
		return result;
	},


	updateNote: async ( params, data ) => {
		let result;
		const details = { '_id': new ObjectID(params) };
		try {
			result = await db.collection('notes').update(details, data);
		} catch(e) {
			result = new Error(e);
		};
		return result;
	}

};