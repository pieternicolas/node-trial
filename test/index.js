const http = require('http');
const assert = require('assert');

const config = require('./../src/config');
require('./../src/server.js');

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:' + config.default.port, res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});