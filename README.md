# remote-origin-url [![NPM version](https://badge.fury.io/js/remote-origin-url.png)](http://badge.fury.io/js/remote-origin-url)

> Get the git remote origin URL from your local git repository. Remember! A remote origin must exist first!

## Installation

Install with [npm](https://npmjs.org/):

```bash
npm i remote-origin-url --save
```

Install with [bower](https://github.com/bower/bower):

```bash
bower install remote-origin-url --save
```

## Usage

Using the defaults:

```js
var origin = require('remote-origin-url');
console.log(origin.url());
// "https://github.com/jonschlinkert/remote-origin-url.git"
```

Specify the "base" directory, excluding `.git`. Example:

```
origin.url(__dirname);
```

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 [Jon Schlinkert](http://twitter.com/jonschlinkert), contributors.
Released under the [MIT license](./LICENSE-MIT)