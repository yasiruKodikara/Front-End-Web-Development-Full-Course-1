//function_1

function greet(name:string){
    return `Hello ${name}`;
};

console.log(greet('yasiru'));

//function_2
function checkUser(user:User){
    return `Name:${user.name}
    Age:${user.age}`
}

interface User{
    name:string,
    age:number
}

const user:User = {
    name:'yasiru',age:20
}

console.log(checkUser(user));

//function return type define
/*function greet2():string{
    return 12
}
//this will give an error    */

//any keyword
let Age :any = 12;
Age = 'Akon';
console.log(Age);

//Enums
enum Directions{
    North = 1,
    East = 2,
    West = 3,
    South = 4
};

console.log(Directions.North);

enum colors{
    red = 'RED',
    blue = 'BLUE'
};
console.log(colors.red);

//Alias
type strdata = string
let message:strdata = 'ckon'
console.log(message);

//Union alias
type id = number | string
let id1 :id = 'ABC'
let id2 :id = 12
console.log(id1)

type stringArray = string[]
let usernames :stringArray = ['akon','bkon']
console.log(usernames)

type numberArray = number[]
let ourages :numberArray = [12,23]
console.log(ourages)

//complex objects using aliases
type person = {
    name:string,
    age:number,
    isMarried:boolean

}

let person1:person = {
    name:'ekon',
    age:12,
    isMarried:true
}
console.log(person1)

//tuple with aliases
type point = [number,number]
let point1 = [12,23]
console.log(point1)

//aliases combine
type hasName = {
    name:string
}
type hasAge = {
    age:number
}
type userProfile = hasName & hasAge 

let userProfile1:userProfile = {
    name:'yasiru',
    age:20
}

console.log(userProfile1)