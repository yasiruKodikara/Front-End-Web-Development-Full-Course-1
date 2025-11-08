var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classes
var Student = /** @class */ (function () {
    function Student() {
        console.log('This is constructor');
    }
    return Student;
}());
var st1 = new Student();
var employee = /** @class */ (function () {
    function employee(ename, eage) {
        this.eName = ename;
        this.eAge = eage;
        console.log();
    }
    employee.prototype.displayPrivateData = function () {
        console.log("Age is ".concat(this.eAge));
    };
    return employee;
}());
;
var emp1 = new employee('Akon', 23);
console.log(emp1.eName);
//console.log(emp1.eAge) //this will give an error because the eAge is private
//access modifiers
//private , public , protected
emp1.displayPrivateData();
//protected
var Teacher = /** @class */ (function () {
    function Teacher(tName, tSalary, tSubject) {
        this.tName = tName;
        this.tSalary = tSalary;
        this.tSubject = tSubject;
    }
    return Teacher;
}());
var MathTeacher = /** @class */ (function (_super) {
    __extends(MathTeacher, _super);
    function MathTeacher(tName, tSalary) {
        return _super.call(this, tName, tSalary, 'Math') || this;
    }
    MathTeacher.prototype.displaySubject = function () {
        console.log(this.tSubject);
    };
    return MathTeacher;
}(Teacher));
var tech1 = new MathTeacher('Ckon', 89000);
console.log(tech1.tName);
tech1.displaySubject();
