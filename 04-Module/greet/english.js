var greetings = require('./greeting.json');

var greet = function() {
    console.log(greetings.english);
}

module.exports = greet;