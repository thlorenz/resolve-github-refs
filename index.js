'use strict';

var hyperquest = require('hyperquest')
  , through = require('through2')

var githubToken = process.env.GITHUB_TOKEN;

function drop2NJoin (x) {
  return x.slice(1).join('/');
}

var go = module.exports = 

/**
 * @name resolveGithubRefs 
 * @function
 * @param {string} repo github repository of the form user/name
 * @param {function} cb called back with error or all github refs (including heads, tags and pulls)
 */
function (repo, cb) {

  var opts = {
        uri: 'https://api.github.com/repos/' + repo + '/git/refs'
      , json: true
      , body: {}
      , headers: { 'user-agent': 'resolve-github-refs' } 
      };
  
  if (githubToken) opts.headers.Authorization = 'bearer ' + githubToken;

  hyperquest(opts,  function (err, res) {
    
    var data = '';
    res
      .on('error', cb)
      .pipe(through(onread, onflush))

    function onread (d, _, cb_) { data += d; cb_() }
    function onflush (cb_) { 
      if (res.statusCode !== 200) return cb_(data);

      var refs;
      try {
        refs = JSON.parse(data).map(function (x) { return x.ref })
      } catch (err) {
        return cb_(err);
      }

      var parts = refs.map(function (x) { return x.split('/').slice(1) })

      var ret = {
          heads : parts.filter(function (x) { return x[0] === 'heads' }).map(drop2NJoin)
        , tags  : parts.filter(function (x) { return x[0] === 'tags' }).map(drop2NJoin)
        , pulls : parts.filter(function (x) { return x[0] === 'pull' }).map(drop2NJoin)
      }
      cb(null, ret);
    }
  });
}
