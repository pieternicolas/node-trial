import responder from './../util/responder.js';
import { notesController } from './../controllers/';

// const notesController = controllers.notesController;

export default ( app, db ) => {

	/*
	* GET all notes
	* =============
	*	@return = Array
	*/
	app.get( '/notes', (req, res, next) => {
		notesController.getNotes(app, db)
			.then(response => {
				responder(res, next, response);
			})
			.catch(error => {
				responder(res, next);
			});
	});

	/*
	* GET single note
	* ===============
	* @param = String (_id)
	* @return = Object
	*/
	app.get( '/notes/:id', (req, res, next) => {
		notesController.getSingleNote(app, db, req.params)
			.then(response => {
				responder(res, next, response);
			})
			.catch(error => {
				responder(res, next);
			});
	});

	/*
	* POST new note
	* =============
	* @param = Object (text, title)
	* @return = Object (_id, text, title)
	*/
	app.post( '/notes', (req, res, next) => {
		notesController.postNote(app, db, req.body)
			.then(response => {
				responder(res, next, response);
			})
			.catch(error => {
				responder(res, next);
			});
	});

	/*
	* DELETE single note
	* ==================
	* @param = String (_id)
	* @return = HTTP status
	*/
	app.delete( '/notes/:id', (req, res, next) => {
		notesController.deleteNote(app, db, req.params)
			.then(response => {
				responder(res, next, response);
			})
			.catch(error => {
				responder(res, next);
			});
	});

	/*
	* UPDATE single note
	* =================
	* @param = String (_id)
	* @return = Object
	*/
	app.post('/notes/:id/edit', (req, res, next) => {
		notesController.updateNote(app, db, req.params, req.body)
			.then(response => {
				responder(res, next, response);
			})
			.catch(error => {
				responder(res, next);
			});
	});

};