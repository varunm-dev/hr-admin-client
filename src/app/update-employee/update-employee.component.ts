import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Employee} from '../interfaces/employee.intreface';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent  {

  employee: Employee;

  constructor(
    private _mdr: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) data: Employee,
  ) {
    this.employee = data;
  }

  closeDialog() {
   this._mdr.close(this.employee);
  }

}
