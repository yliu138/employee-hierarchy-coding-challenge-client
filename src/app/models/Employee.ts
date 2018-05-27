export class Employee {
    employeeId: number;
    name: string;
    subordinateList: Array<number>;
    managerlist: Array<number>;
    ceo: boolean;
    validEmployee: boolean;
    expanded: boolean;
    level?: string;

    constructor(employeeId: number, name: string, subordinateList: Array<number>, managerList: Array<number>, ceo: boolean, validEmployee: boolean) {
        this.expanded = true;
        this.employeeId = employeeId;
        this.name = name;
        this.subordinateList = subordinateList || [];
        this.managerlist = managerList || [];
        this.ceo = ceo;
        this.validEmployee = validEmployee;
        this.level = 'abstract';
    }

    toggle() {
        this.expanded = !this.expanded;
    }

    addSubordiate(id: number): void {
        this.subordinateList.push(id);
    }

    addManager(id: number): void {
        this.managerlist.push(id);
    }

    displayName(): string {
        return this.name;
    }

    getLevel(): string {
        return this.level;
    }
}