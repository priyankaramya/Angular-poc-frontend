import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')

@Injectable()
export class EmployeeService {
  selectedEmployee!: Employee;
  employees: Employee[] = [];
  readonly baseURL = ('https://angular-poc-backend.vercel.app/employees');

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp, { 'headers': headers });
  }

  getEmployeeList() {
    return this.http.get(this.baseURL, { 'headers': headers });
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp, { 'headers': headers });
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`, { 'headers': headers });
  }

}
