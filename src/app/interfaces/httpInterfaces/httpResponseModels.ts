import { IResponseEmployeeMapGet } from './httpResponseModels';
import { Employee } from './../../models/Employee';
export interface IResponseEmployeeMapGet {
    ceoId: number;
    // Index signature
    map: {
        [index: number]: Employee
    }
}