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

  constructor(
    private employeeService: EmployeeService
  ) {
    this.title = 'app works!';
    this.employeeService.getEmployeeMap(new EmployeeMapGetCallback(this.handleMapGet));
  }

  handleMapGet = (response: IResponseEmployeeMapGet): void => {
    console.log(response, '===')
  }

  ngOnInit(): void {
  }
}
