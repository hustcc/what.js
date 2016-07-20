'use strict';
var test = require('tape');
var what = require('..');

test('what.js show be tested', function (t) {
  t.equal(what({}), 'object');
  t.equal(what({'a': 12}), 'object');
  t.equal(what({'0': 'abc'}), 'object');

  t.equal(what([]), 'array');
  t.equal(what([1, 2]), 'array');
  t.equal(what(['abc', 12, 3]), 'array');

  t.equal(what(function() {}), 'function');
  t.equal(what(setTimeout), 'function');

  t.equal(what(/a/), 'regexp');
  t.equal(what(/^what\.js$/), 'regexp');
  
  t.equal(what(new Date()), 'date');
  t.equal(what(null), 'null');
  t.equal(what(undefined), 'undefined');

  t.equal(what(''), 'string');
  t.equal(what(""), 'string');
  t.equal(what('abc123'), 'string');

  t.equal(what(123), 'number');
  t.equal(what(12.4), 'number');

  t.equal(what(true), 'boolean');
  t.equal(what(false), 'boolean');

  t.end();
});