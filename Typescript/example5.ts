//short method 
class Employee{
    constructor(public Ename:string,private Esalary:number){

    }
    displayData(){
        console.log(this.Ename)
        console.log(this.Esalary)
    }

    //this is a setter
    set updateSalary(Salary:number){
        this.Esalary = Salary
    }
    //this is a getter
    get getSalary():number {
        return this.Esalary
    }
}

let Emp1 = new Employee('Dkon',300000)
Emp1.displayData()
Emp1.updateSalary = 900000
Emp1.displayData()
//getter and setter
let Emp1Sal = Emp1.getSalary
console.log(Emp1Sal)