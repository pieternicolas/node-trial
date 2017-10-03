const http = require('http');
const should = require('chai').should();

module.exports = (chai, mainUrl) => {

	const url = mainUrl + '/notes';

	describe('/GET all notes', () => {
		it('Should get all books and as Array', done => {
			chai.request(url)
				.get('/')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					done();
				});
		});
	});

	// describe('/GET single note', () => {
	// 	it('Should return 404 with random params', done => {
	// 		chai.request(url)
	// 			.get('/notes' + '')
	// 	});
	// });
};