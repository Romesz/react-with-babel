/* jshint esnext: true */
/* global require, Promise, exports */

var em6ToEm5 = require('./babel').em6ToEm5;
var servInBrowser = require('./serve').servInBrowser;

exports.promise = () => {
  Promise.resolve(em6ToEm5()).then(() => {
    servInBrowser();
  });
};