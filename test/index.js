'use strict';
/*jshint asi: true */

var test = require('tap').test
var resolve = require('../')

test('\ngetting refs for joyent/node', function (t) {
  resolve('joyent/node', function (err, refs) {
    if (err) { t.fail(err); return t.end(); }
      
    t.ok(refs.heads.length > 80, 'has more than 80 heads')
    t.ok(~refs.heads.indexOf('v0.8.7-release'), 'has head v0.8.7-release')

    t.ok(refs.tags.length > 200, 'has more than 200 tags')
    t.ok(~refs.tags.indexOf('v0.0.1'), 'has tag v0.0.1')

    t.ok(refs.pulls.length > 5000, 'has more than 5000 pulls')
    t.ok(~refs.pulls.indexOf('254/head'), 'has pull 254/head')

    t.end();
  })
})
