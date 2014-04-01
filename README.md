# resolve-github-refs [![build status](https://secure.travis-ci.org/thlorenz/resolve-github-refs.png)](http://travis-ci.org/thlorenz/resolve-github-refs)

Resolves all refs for a remote github repo, including heads, tags and pulls.

```js
var resolve = require('resolve-github-refs')

resolve('joyent/node', function (err, refs) {
  if (err) return console.error(err);
  console.log('The nodejs repo has %d heads, %d tags and %d pulls', refs.heads.length, refs.tags.length, refs.pulls.length);
  console.log('The latest head is "%s"', refs.heads.pop());
  console.log('The latest tag is "%s"', refs.tags.pop());
  console.log('The latest pull is "%s"', refs.pulls.pop());
})
```

```
The nodejs repo has 104 heads, 231 tags and 5257 pulls
The latest head is "v0.11.12-release"
The latest tag is "works"
The latest pull is "7394/merge
```

## Installation

    npm install resolve-github-refs

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="resolveGithubRefs"><span class="type-signature"></span>resolveGithubRefs<span class="signature">(repo, cb)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>repo</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>github repository of the form user/name</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>called back with error or all github refs (including heads, tags and pulls)</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/resolve-github-refs/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/resolve-github-refs/blob/master/index.js#L14">lineno 14</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
