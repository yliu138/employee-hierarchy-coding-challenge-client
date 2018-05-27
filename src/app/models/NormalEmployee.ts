import { Employee } from './Employee';
export class NormalEmployee extends Employee {
    constructor(employeeId: number, name: string, subordinateList: Array<number>, managerList: Array<number>, ceo: boolean, validEmployee: boolean) {
        super(employeeId, name, subordinateList, managerList, ceo, validEmployee);
        this.level = 'normal';
    }
}