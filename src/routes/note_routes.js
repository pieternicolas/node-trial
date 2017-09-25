import { ObjectID } from 'mongodb';
import responder from './../responders/';

import notesController from './../controllers/notes_controller.js';

export default function ( app, db ) {

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
	* @param = String
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


	app.post( '/notes', (req, res) => {
		const note = {
			text: req.body.body,
			title: req.body.title
		};
		db.collection('notes').insert(note, (err, result) => {
			if (err) { 
				res.send(err);
			} else {
				res.status(200).json(result.ops[0]);
			};
		});
	});


	app.delete( '/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('notes').remove(details, (err, item) => {
			if (err) {
				res.send(err);
			} else {
				res.status(200).json({ message: 'Note' + id + 'deleted!' });
			};
		});
	});


	app.post('/notes/:id/edit', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		const note = {
			text: req.body.body,
			title: req.body.title
		};
		db.collection('notes').update(details, note, (err, result) => {
			if (err) {
				res.send(err);
			} else {
				res.status(200).json(note);
			};
		});
	});

};