/* global require, exports */

var browserSync = require('browser-sync');

exports.servInBrowser = function() {
  browserSync({
    open: true,
    port: 9000,
    server: {
      baseDir: ['./clientside'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  });
};