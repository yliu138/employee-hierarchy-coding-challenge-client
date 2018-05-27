import { NormalEmployee } from './../models/NormalEmployee';
import { Ceo } from './../models/Ceo';
import { InvalidEmployee } from './../models/InvalidEmployee';
import { Employee } from './../models/Employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeFactory {
    constructor() {}

    createEmployee(e: Employee): Employee {
        let result: Employee = null;
        if (!e.validEmployee) {
            result = new InvalidEmployee(e.employeeId, e.name, e.subordinateList, e.managerlist, e.ceo, e.validEmployee);
        } else if (e.ceo) {
            result = new Ceo(e.employeeId, e.name, e.subordinateList, e.managerlist, e.ceo, e.validEmployee);
        } else {
            result = new NormalEmployee(e.employeeId, e.name, e.subordinateList, e.managerlist, e.ceo, e.validEmployee);
        }
        return result;
    }
}