//undefined
var age;
console.log(age);
console.log(typeof age);
var Uname;
Uname = 'yasiru';
//Uname = 12;
console.log(Uname);
//null
var name1 = null;
console.log(name1);
console.log(typeof name1);
function greet(name) {
    console.log(name);
}
greet();
function greet1(name) {
    if (name == undefined) {
        console.log('hello someone');
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greet1('Akon');
var user1 = {
    name: 'Bkon',
    age: 23,
    greeting: function () {
        return "Hello ".concat(this.name);
    }
};
console.log(user1);
console.log(user1.greeting());
var employee1 = {
    name: 'Ckon',
    age: 23,
    jobTitle: 'scientist'
};
console.log(employee1);
console.log(employee1.jobTitle);
