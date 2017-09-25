import createError from 'http-errors';
import notesModel from './../models/notes_model.js';


const getNotes = ( app, db ) => {
	const result = notesModel.getNotes(db)
		.then(res => {
			if (!res) {
				return { status: 404 };
			} else {
				return { status: 200, data: res };
			};
		})
		.catch(err => {
			return new Error(err);
		});

	return result;
};


const getSingleNote = async ( app, db, params ) => {
	const result = await notesModel.getSingleNote(db, params.id)
		.then(res => {
			if (!res) {
				return { status: 404 };
			} else {
				return { status: 200, data: res };
			};
		})
		.catch(err => {
			return new Error(err);
		});

	return result;
}


export default { getNotes, getSingleNote };