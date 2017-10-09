const settings = require('./../database.json');

module.exports = {
	host: settings.dev.host,
	user: settings.dev.user,
	password: settings.dev.password,
	database: settings.dev.database
};