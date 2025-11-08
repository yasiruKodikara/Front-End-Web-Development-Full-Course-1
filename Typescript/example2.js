//function_1
function greet(name) {
    return "Hello ".concat(name);
}
;
console.log(greet('yasiru'));
//function_2
function checkUser(user) {
    return "Name:".concat(user.name, "\n    Age:").concat(user.age);
}
var user = {
    name: 'yasiru', age: 20
};
console.log(checkUser(user));
//function return type define
/*function greet2():string{
    return 12
}
//this will give an error    */
//any keyword
var Age = 12;
Age = 'Akon';
console.log(Age);
//Enums
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 1] = "North";
    Directions[Directions["East"] = 2] = "East";
    Directions[Directions["West"] = 3] = "West";
    Directions[Directions["South"] = 4] = "South";
})(Directions || (Directions = {}));
;
console.log(Directions.North);
var colors;
(function (colors) {
    colors["red"] = "RED";
    colors["blue"] = "BLUE";
})(colors || (colors = {}));
;
console.log(colors.red);
var message = 'ckon';
console.log(message);
var id1 = 'ABC';
var id2 = 12;
console.log(id1);
var usernames = ['akon', 'bkon'];
console.log(usernames);
var ourages = [12, 23];
console.log(ourages);
var person1 = {
    name: 'ekon',
    age: 12,
    isMarried: true
};
console.log(person1);
var point1 = [12, 23];
console.log(point1);
var userProfile1 = {
    name: 'yasiru',
    age: 20
};
console.log(userProfile1);
