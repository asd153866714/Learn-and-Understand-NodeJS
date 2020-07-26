var greet = require('./greet1');
greet();

// module method or properties
var greet2 = require('./greet2').greet;
greet2();

// object
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Change hello world'

var greet3b = require('./greet3');
greet3b.greet();

// funtion constructor
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

// Revealing Module Patterns
var greet5 = require('./greet5').greet;
greet5();
