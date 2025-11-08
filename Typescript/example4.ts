//classes
class Student {
    sName:string
    sAge:number

    constructor(){
        console.log('This is constructor')
    }
}
let st1 = new Student()

class employee {
    eName:string //this is a public variable
   private eAge:number //this is a private variable

    constructor(ename:string,eage:number){
        this.eName = ename
        this.eAge = eage
        console.log()
    }

    displayPrivateData(){
        console.log(`Age is ${this.eAge}`)
    }
};

let emp1 = new employee('Akon',23);
console.log(emp1.eName)
//console.log(emp1.eAge) //this will give an error because the eAge is private

//access modifiers
//private , public , protected
emp1.displayPrivateData()

//protected
class Teacher{
    public tName:string
    private tSalary:number //can only access from this class
    protected tSubject:string //can only accress from this class and subclasses of Teacher

    constructor(tName:string,tSalary:number,tSubject){
        this.tName = tName;
        this.tSalary = tSalary;
        this.tSubject =  tSubject;
    }
}

class MathTeacher extends Teacher{
    constructor(tName:string,tSalary:number){
        super(tName,tSalary,'Math')
    }
    displaySubject(){
        console.log(this.tSubject)
    }
}
let tech1 = new MathTeacher('Ckon',89000)
console.log(tech1.tName);
tech1.displaySubject()