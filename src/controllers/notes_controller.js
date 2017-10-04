import createError from 'http-errors';
import { notesModel } from './../models/';


export default {

	getNotes: async ( app, db ) => {
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
	},


	getSingleNote: async ( app, db, params ) => {
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
	},


	postNote: async ( app, db, data ) => {
		const note = {
			title: data.title,
			text: data.text
		};

		const result = await notesModel.postNote(db, data)
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
	},


	deleteNote: async ( app, db, params ) => {
		const result = await notesModel.deleteNote(db, params.id)
			.then(res => {
				if (res.result.n === 0) {
					return { status: 404 };
				} else {
					return { status: 200, data: 'Note deleted successfully' };
				};
			})
			.catch(err => {
				return new Error(err);
			});

		return result;
	},


	updateNote: async ( app, db, params, data ) => {
		const note = {
			title: data.title,
			text: data.text
		};

		const result = await notesModel.updateNote(db, params.id, note)
			.then(res => {
				if (res.result.n === 0) {
					return { status: 404 };
				} else {
					return { status: 200, data: note };
				};
			})
			.catch(err => {
				return new Error(err);
			});

		return result;
	}

};