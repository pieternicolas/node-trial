const noteRoutes = require('./note_routes');


module.exports = function(app, db) {
	app.get('/', (req, res) => {
		res.status(200).send('Hello to node trial');
	});

	noteRoutes(app, db);
	// Other route groups could go here, in the future
};