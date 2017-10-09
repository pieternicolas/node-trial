import createError from 'http-errors';
import { notesModel } from './../models/';


export default {

	getNotes: async ( app ) => {
		const result = notesModel.getNotes()
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


	getSingleNote: async ( app, params ) => {
		const result = await notesModel.getSingleNote(params.id)
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


	postNote: async ( app, data ) => {
		const note = {
			title: data.title,
			text: data.text
		};

		const result = await notesModel.postNote(data)
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


	deleteNote: async ( app, params ) => {
		const result = await notesModel.deleteNote(params.id)
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


	updateNote: async ( app, params, data ) => {
		const note = {
			title: data.title,
			text: data.text
		};

		const result = await notesModel.updateNote(params.id, note)
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