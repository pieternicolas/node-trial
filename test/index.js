const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
chai.use(chaiHttp);

const config = require('./../src/config');
const mainUrl = 'http://127.0.0.1:' + config.default.port;

const notesTester = require('./notes.js');

describe('Example Node Server', () => {
  it('Should return 200', done => {
    chai.request(mainUrl)
    	.get('/')
    	.end((err, res) => {
    		res.should.have.status(200);
    		done();
    	});
  });
});

describe('Notes', () => {
	notesTester(chai, mainUrl);
});