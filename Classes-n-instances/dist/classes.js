"use strict";
// class Department {
//   private name: string;
//   private readonly employees: string[] = [];
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe(this: Department) {
//     console.log('Department: ' + this.name);
//   }
//   addEmployee(employee: string){
//     this,this.employees.push(employee);
//   }
//   printEmployeeInfo(){
//     console.log(this.employees.length);
//     console.log(this.employees)
//   }
// }
// const accounting = new Department('Accounting');
// accounting.addEmployee('Ade');
// accounting.addEmployee('Ola');
// accounting.addEmployee('Anna');
// // accounting.employees[2] = 'Anna'
// accounting.describe();
// accounting.printEmployeeInfo();
// // console.log(accounting);
// // const accountingCopy= {name: 'AccountingTwo', describe: accounting.describe}
// // accountingCopy.describe();
// // const Engineering = new Department('Engineering');
// // Engineering.describe();
//SHORTHAND INITIALIZATION
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    // {
    //   // console.log(`Department (${this.id}) : ${this.name}`);
    // }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log(`Department (${this.id}) : ${this.name}`);
    }
}
class AcctDepartment extends Department {
    constructor(id, reports) {
        super(id, 'AcctDept');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error();
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AcctDepartment.instance) {
            return this.instance;
        }
        this.instance = new AcctDepartment('DI', []);
        return this.instance;
    }
    ;
    describe() {
        console.log('Accounting department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Maxwell');
console.log(employee1, Department.fiscalYear);
const ITDept = new ITDepartment('DE', ['Max']);
ITDept.addEmployee('Ade');
ITDept.addEmployee('Ola');
ITDept.describe();
ITDept.printEmployeeInfo();
console.log(ITDept);
// const AcctDept = new AcctDepartment('DI', [], );
const AcctDept = AcctDepartment.getInstance();
const AcctDept2 = AcctDepartment.getInstance();
AcctDept.mostRecentReport = 'Lakers winning the chip';
AcctDept.addReport("Something went wrong.....");
console.log(AcctDept.mostRecentReport);
AcctDept.addEmployee('Ade');
AcctDept.addEmployee('Max');
AcctDept.describe();
// AcctDept.printReports();
// AcctDept.printEmployeeInfo();
console.log(AcctDept, AcctDept2);
// const accounting = new Department('DE', 'Accounting');
// accounting.addEmployee('Ade');
// accounting.addEmployee('Ola');
// accounting.addEmployee('Anna');
// // accounting.employees[2] = 'Anna'
// accounting.describe();
// accounting.printEmployeeInfo();
// console.log(accounting);
// const accountingCopy= {name: 'AccountingTwo', describe: accounting.describe}
// accountingCopy.describe();
// const Engineering = new Department('Engineering');
// Engineering.describe();
