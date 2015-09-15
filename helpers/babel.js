/* global require, console, exports */

var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

exports.em6ToEm5 = function() {
  browserify('./clientside/js/index.jsx', {extensions: ['.jsx'], debug: true })
    .transform(babelify)
    .bundle()
    .on('error', function (err) { console.log('Error : ' + err.message); })
    .pipe(fs.createWriteStream('./clientside/js/indexEM5.jsx'));
};