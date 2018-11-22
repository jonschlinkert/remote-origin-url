'use strict';

require('mocha');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const gitty = require('gitty');
const del = require('delete');
const url = require('./');
let repo;

const cwd = process.cwd();
const tmp = path.resolve(__dirname, 'fixtures');
const git = path.resolve(tmp, '.git');

describe('repo', () => {
  before(cb => {
    process.chdir(tmp);
    del(git, (err) => {
      if (err) return cb(err);
      repo = gitty(tmp);
      repo.initSync();
      repo.addSync(['.']);
      repo.commitSync('first commit');
      repo.addRemote('origin', 'https://github.com/jonschlinkert/test-project.git', cb);
    });
  });

  after(cb => {
    process.chdir(cwd);
    del(git, cb);
  });

  describe('async', () => {
    it('should return the git remote origin URL.', cb => {
      url((err, res) => {
        assert.equal(res, 'https://github.com/jonschlinkert/test-project.git');
        cb();
      })
    });
  });

  describe('sync', () => {
    it('should return the git remote origin URL.', () => {
      assert.equal(url.sync(), 'https://github.com/jonschlinkert/test-project.git');
    });
  });
});

describe('no repo', () => {
  describe('async', () => {
    it('should return `undefined` when not found', cb => {
      url('foo', (err, res) => {
        if (err) return cb(err);
        assert.equal(res, void 0);
        cb();
      });
    });
  });

  describe('sync', () => {
    it('should return `undefined` when config is not found.', () => {
      assert.equal(url.sync('foo'), void 0);
    });
  });
});
