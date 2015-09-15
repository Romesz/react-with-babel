/* global require, console, process */

var em6ToEm5 = require('./helpers/babel').em6ToEm5;
var servInBrowser = require('./helpers/serve').servInBrowser;

var nodeVersion = parseInt(process.versions.node);
//console.log(nodeVersion);

if(nodeVersion >= 4) {
  /* --- With promises (Node 4.0.0) --- */
  var nodeSupportPromise = require('./helpers/nodeSupportPromise').promise;
  nodeSupportPromise();
} else {
  /* --- Without promises (before Node 4.0.0) --- */
  em6ToEm5();
  servInBrowser();
}