import { ObjectID } from 'mongodb';


export default function( app, db ) {

	/*
	* GET all notes
	*	@return = Array
	*/
	app.get( '/notes', (req, res) => {
		const result = db.collection('notes').find().toArray((err, items) => {
			if (err) {
				res.send(err);
			} else {
				res.status(200).json(items);
			};
		});
	});


	app.get( '/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send(err);
			} else {
				res.status(200).json(item);
			};
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