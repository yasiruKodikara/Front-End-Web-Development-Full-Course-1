//short method 
var Employee = /** @class */ (function () {
    function Employee(Ename, Esalary) {
        this.Ename = Ename;
        this.Esalary = Esalary;
    }
    Employee.prototype.displayData = function () {
        console.log(this.Ename);
        console.log(this.Esalary);
    };
    Object.defineProperty(Employee.prototype, "updateSalary", {
        //this is a setter
        set: function (Salary) {
            this.Esalary = Salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getSalary", {
        //this is a getter
        get: function () {
            return this.Esalary;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var Emp1 = new Employee('Dkon', 300000);
Emp1.displayData();
Emp1.updateSalary = 900000;
Emp1.displayData();
//getter and setter
var Emp1Sal = Emp1.getSalary;
console.log(Emp1Sal);
