'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var gitty = require('gitty');
var del = require('delete');
var url = require('./');
var repo;

var cwd = process.cwd();
var tmp = path.resolve(__dirname, 'fixtures');
var git = path.resolve(tmp, '.git');

describe('repo', function() {
  before(function(cb) {
    process.chdir(tmp);
    del(git, function(err) {
      if (err) return cb(err);
      repo = gitty(tmp);
      repo.initSync();
      repo.addSync(['.']);
      repo.commitSync('first commit');
      repo.addRemote('origin', 'https://github.com/jonschlinkert/test-project.git', cb);
    });
  });

  after(function(cb) {
    process.chdir(cwd);
    del(git, cb);
  });

  describe('async', function() {
    it('should return the git remote origin URL.', function(cb) {
      url(function(err, res) {
        assert.equal(res, 'https://github.com/jonschlinkert/test-project.git');
        cb();
      })
    });
  });

  describe('sync', function() {
    it('should return the git remote origin URL.', function() {
      assert.equal(url.sync(), 'https://github.com/jonschlinkert/test-project.git');
    });
  });
});

describe('no repo', function() {
  describe('async', function() {
    it('should return `null` when not found', function(cb) {
      url('foo', function(err, res) {
        if (err) return cb(err);
        assert.equal(res, null);
        cb();
      });
    });
  });

  describe('sync', function() {
    it('should return `null` when config is not found.', function() {
      assert.equal(url.sync('foo'), null);
    });
  });
});
