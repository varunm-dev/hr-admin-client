import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {EmployeeService} from '../employee.service';
import {Employee} from '../interfaces/employee.intreface';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UpdateEmployeeComponent} from '../update-employee/update-employee.component';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss'],
})
export class ViewEmployeesComponent implements OnInit {
  displayedColumns = ['name', 'email', 'phNumber', 'website', 'action'];
  dataSource: any;
  matDialogRef: any;
  icon = 'edit';
  constructor(public employeeService: EmployeeService, public matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((emps: any) => {
      this.dataSource = new MatTableDataSource<Employee>(emps);
    });
  }

  openModal(employee: Employee) {
    this.matDialogRef = this.matDialog.open(UpdateEmployeeComponent, {
      data: {...employee},
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe((res: any) => {
      if ((res)) {
        this.employeeService.updateEmployee(res).subscribe((val: any) => {
          this.dataSource = new MatTableDataSource<Employee>(val);
        });
      }
    });
  }

}

