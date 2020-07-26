// Native / Core Modules in Node.js
var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);