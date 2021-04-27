import {TestBed} from '@angular/core/testing';
import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import {Employee} from './interfaces/employee.intreface';
import {MockEmpService} from './view-employees/view-employees.component.spec';

describe('EmployeeService', () => {
  let service: EmployeeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EmployeeService]
    });
    service = TestBed.get(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('be able to retrieve emp List from the API bia GET', () => {
    const data: Employee[] = new MockEmpService().data;
    service.getEmployees().subscribe((empList: any) => {
      expect(empList.length).toBe(10);
    });
  });
  it('be able to update emp', () => {
    const data: Employee[] = new MockEmpService().data;
    service.updateEmployee(data[0]).subscribe((empList: any) => {
      expect(empList.length).toBe(10);
    });
  });
});
