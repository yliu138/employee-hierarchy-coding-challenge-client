import { Employee } from './Employee';
export class InvalidEmployee extends Employee {
    constructor(employeeId: number, name: string, subordinateList: Array<number>, managerList: Array<number>, ceo: boolean, validEmployee: boolean) {
        super(employeeId, name, subordinateList, managerList, ceo, validEmployee);
        this.level = 'invalid';
    }

     // Override
    displayName(): string {
        return `${this.name} (Invalid)`;
    }

    // Override
    addManager(id: number): void {
        // Should do nothing here as CEO is assuemd to not have any manager
    }

    // Override
    addSubordiate(id: number): void {
        // Should do nothing as invalid Employee will not have any subordinate
    }
}