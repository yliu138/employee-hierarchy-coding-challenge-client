import { EmployeeFactory } from './../services/employeeFactory';
import { Employee } from './../models/Employee';
import { Response } from '@angular/http';
import { IResponseEmployeeMapGet } from './../interfaces/httpInterfaces/httpResponseModels';
import { Callback } from './../interfaces/callback.interface';
import { EmployeeService } from './../services/http/employeeService';
import { AppConstant } from './../app.constant';
import { Component, OnInit } from '@angular/core';

class EmployeeMapGetCallback implements Callback<IResponseEmployeeMapGet, Response> {
  constructor(private cb: any) {}
  
  onSuccess(response: IResponseEmployeeMapGet) {
    this.cb(response);
  }

  onError(err: Response) {
    console.log(`Error: ${JSON.stringify(err, null, 2)}`);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    EmployeeService
  ]
})
export class AppComponent implements OnInit {
  private title:string;
  private ceoId: number;
  private ceo: Employee;
  private employeeMap: {[index: number]: Employee};
  private directories: Array<number>;

  constructor(
    private employeeService: EmployeeService,
    private employeefac: EmployeeFactory
  ) {
    this.title = 'Employee Hierarchy';
    this.employeeService.getEmployeeMap(new EmployeeMapGetCallback(this.handleMapGet));
  }

  handleMapGet = (response: IResponseEmployeeMapGet): void => {
    this.ceoId = response.ceoId;
    this.directories = [this.ceoId];
    this.employeeMap = response.map;
    this.ceo = this.employeeMap[this.ceoId];

    // Construct the employee types so that they could be used for the tree view
    const ids = Object.keys(this.employeeMap);
    for (const id of ids) {
      this.employeeMap[id] = this.employeefac.createEmployee(this.employeeMap[id]);
    }
    console.log(this.employeeMap)
  }

  ngOnInit(): void {
  }
}
