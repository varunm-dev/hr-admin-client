import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './interfaces/employee.intreface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  host = 'http://localhost:8080/';
  employeesUrl = 'getEmployees';
  updateEmployeesUrl = 'updateEmployee';
  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.host + this.employeesUrl);
  }

  updateEmployee(emp: Employee) {
    return this.http.post(this.host + this.updateEmployeesUrl, emp);
  }
}
