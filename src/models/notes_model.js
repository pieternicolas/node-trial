import { ObjectID } from 'mongodb';


const getNotes = async ( db, params ) => {
	let result;
	try {
		result = await db.collection('notes').find().toArray();
	} catch(e) {
		result = new Error(e);
	};
	return result;
};


const getSingleNote = async ( db, params ) => {
	let result;
	const details = { '_id': new ObjectID(params) };
	try {
		result = await db.collection('notes').findOne(details);
	} catch(e) {
		result = new Error(e);
	};
	return result;
};


const postNote = async ( db, data ) => {
	let result;
	try {
		result = await db.collection('notes').insert(data);
	} catch(e) {
		result = new Error(e);
	};
	return result.ops[0];
};


const deleteNote = async ( db, params ) => {
	let result;
	const details = { '_id': new ObjectID(params) };
	try {
		result = await db.collection('notes').remove(details);
	} catch(e) {
		result = new Error(e);
	};
	return result;
};


export default { getNotes, getSingleNote, postNote, deleteNote };