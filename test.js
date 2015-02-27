'use strict';

var url = require('./');
require('should');

describe('async:', function () {
  it('should return `null` when not found', function (cb) {
    url('foo', function (err, res) {
      (res == null).should.be.true;
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

  it('should return `null` when config is not found.', function () {
    (url.sync('foo') == null).should.be.true;
  });
});
