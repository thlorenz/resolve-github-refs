'use strict';

var resolve = require('../')

resolve('joyent/node', function (err, refs) {
  if (err) return console.error(err);
  console.log('The nodejs repo has %d heads, %d tags and %d pulls', refs.heads.length, refs.tags.length, refs.pulls.length);
  console.log('The latest head is "%s"', refs.heads.pop());
  console.log('The latest tag is "%s"', refs.tags.pop());
  console.log('The latest pull is "%s"', refs.pulls.pop());
})
