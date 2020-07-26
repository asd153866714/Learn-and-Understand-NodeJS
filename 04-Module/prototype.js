function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' +
    this.lastname)
};

var john = new Person('John', 'Doe');
john.greet();

var mike = new Person('Mike', 'Doe');
mike.greet();

console.log(john.__proto__);
console.log(mike.__proto__);
console.log(john.__proto__ === mike.__proto__);