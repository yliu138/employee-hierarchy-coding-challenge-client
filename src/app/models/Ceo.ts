import { Employee } from './Employee';
export class Ceo extends Employee {
    constructor(employeeId: number, name: string, subordinateList: Array<number>, managerList: Array<number>, ceo: boolean, validEmployee: boolean) {
        super(employeeId, name, subordinateList, managerList, ceo, validEmployee);
        this.level = 'ceo';
    }

    // Override
    displayName(): string {
        return `${this.name} (CEO)`;
    }

    // Override
    addManager(id: number): void {
        // Should do nothing here as CEO is assuemd to not have any manager
    }
}