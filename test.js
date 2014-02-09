var expect = require('chai').expect;
var origin = require('./');

describe('git remote origin URL:', function () {
  it('should return the git remote origin URL.', function () {
    var actual = origin.url();
    console.log('git remote origin url:', actual);
    var expected = 'https://github.com/jonschlinkert/remote-origin-url.git';
    expect(actual).to.eql(expected);
  });
});
