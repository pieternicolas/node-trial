import { ObjectID } from 'mongodb';


export default {

	getNotes: async ( db, params ) => {
		let result;
		try {
			result = await db.collection('notes').find().toArray();
		} catch(e) {
			result = new Error(e);
		};
		return result;
	},


	getSingleNote: async ( db, params ) => {
		let result;
		const details = { '_id': new ObjectID(params) };
		try {
			result = await db.collection('notes').findOne(details);
		} catch(e) {
			result = new Error(e);
		};
		return result;
	},


	postNote: async ( db, data ) => {
		let result;
		try {
			result = await db.collection('notes').insert(data);
		} catch(e) {
			result = new Error(e);
		};
		return result.ops[0];
	},


	deleteNote: async ( db, params ) => {
		let result;
		const details = { '_id': new ObjectID(params) };
		try {
			result = await db.collection('notes').remove(details);
		} catch(e) {
			result = new Error(e);
		};
		return result;
	},


	updateNote: async ( db, params, data ) => {
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