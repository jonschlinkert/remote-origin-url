'use strict';

require('should');
var url = require('./');

describe('async:', function () {
  it('should trow when not found', function (cb) {
    url('foo', function (err, res) {
      err.should.be.an.instanceof(Error);
      err.message.should.equal('.git/config does not exist');
      cb();
    });
  });

  it('should return the git remote origin URL.', function (cb) {
    url(function (err, res) {
      res.should.equal('https://github.com/jonschlinkert/remote-origin-url.git');
      cb();
    })
  });
});

describe('sync', function () {
  it('should return the git remote origin URL.', function () {
    url.sync().should.equal('https://github.com/jonschlinkert/remote-origin-url.git');
  });

  it('should throw when config is not found.', function () {
    (function () {
      url.sync('foo');
    }).should.throw('.git/config does not exist.');
  });
});
