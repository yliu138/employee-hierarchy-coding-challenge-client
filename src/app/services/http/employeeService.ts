import { Employee } from './../../models/Employee';
import { ServiceHandler } from './../service.handler';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {HttpClient} from '../http.client';
import {Callback} from '../../interfaces/callback.interface';

@Injectable()
export class EmployeeService {
    constructor(
        private http: HttpClient,
        private serviceHandler: ServiceHandler
    ){}

    getAllEmployee(cb: Callback<any, Response>): void {
        this.http.get('employee', null)
        .subscribe((res) => {
            cb.onSuccess(res);
        }, (err) => {
            let errObj = this.serviceHandler.handleError(err);
            cb.onError(errObj);
        });
    }

    getEmployeeMap(cb: Callback<any, Response>): void {
        this.http.get('employee/map', null)
        .subscribe((res) => {
            cb.onSuccess(res);
        }, (err) => {
            let errObj = this.serviceHandler.handleError(err);
            cb.onError(errObj);
        });
    }
}