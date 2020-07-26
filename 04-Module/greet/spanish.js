var greetings = require('./greeting.json');

var greet = function() {
    console.log(greetings.spanish);
}

module.exports = greet;