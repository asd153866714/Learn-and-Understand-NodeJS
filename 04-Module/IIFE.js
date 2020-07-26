// immediately invoke function expressions
var firstname = 'Jack';

(function (lastname) {
    var firstname = 'Mike';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);