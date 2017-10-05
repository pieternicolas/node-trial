const http = require('http');
const expect = require('chai').expect;

module.exports = (request, mainUrl) => {

	describe('/GET all notes', () => {
		it('Should get all books and as Array', () => {
			request(mainUrl)
				.get('/notes')
				.end((err, res) => {
          // expect(res.status).to.be.equal(200);
          // expect(res.body).to.be.an('array');
          return Promise.all([
            expect(Promise.resolve(res.status).to.eventually.be.equal(200)),
            expect(Promise.resolve(res.body).to.eventually.be.an('array'))
          ]);
				});
		});
	});

	// describe('/GET single note', () => {
	// 	it('Should return 404 with random params', done => {
	// 		request(url)
	// 			.get('/notes' + '')
	// 	});
	// });
};