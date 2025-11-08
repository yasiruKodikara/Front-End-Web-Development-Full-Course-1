//undefined

let age:undefined;
console.log(age)
console.log(typeof age);

let Uname:undefined | string;
Uname ='yasiru';
//Uname = 12;
console.log(Uname)

//null
let name1 = null;
console.log(name1);
console.log(typeof name1);

function greet(name? : string){
    console.log(name)
}
greet();

function greet1(name? : string){
    if(name == undefined){
        console.log('hello someone');
    }
    else{
        console.log(`Hello ${name}`)
    }
}
greet1('Akon');

//interface
interface User {
    name:string,
    age:number,
    greeting():string
}

let user1:User = {
    name:'Bkon',
    age:23,
    greeting(){
        return `Hello ${this.name}`
    }
}
console.log(user1)
console.log(user1.greeting())

//inherit interfaces
interface Person{
    name:string,
    age:number,
    isMarried? :boolean //this is a optional
}

interface employee extends Person{
    jobTitle:string
}

let employee1:employee ={
    name: 'Ckon',
    age:23,
    jobTitle:'scientist'
}
console.log(employee1)
console.log(employee1.jobTitle)