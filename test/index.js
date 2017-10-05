// IMPORTANT FOR TESTING
process.env.NODE_ENV = 'test';


// Require all modules necessary
require('babel-polyfill');
const chai = require('chai');
const expect = require('chai').expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const request = require('supertest');


// Require all tests
const notesTester = require('./notes.js');


// Require main server file
const mainUrl = require('./../dist/server.js').default;


// Server sanity check
describe('Example Node Server', () => {
  it('Should return 200', done => {
    request(mainUrl)
    	.get('/')
    	.end((err, res) => {
        expect(res.status).to.be.equal(200);
    		done();
    	});
  });
});


// Notes controller tests
describe('Notes', () => {
	notesTester(request, mainUrl);
});