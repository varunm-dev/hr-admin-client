import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeComponent } from './update-employee.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatTableModule} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Employee} from '../interfaces/employee.intreface';
import {MatDialogMock, MockEmpService} from '../view-employees/view-employees.component.spec';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;
  const model: Employee = {
    id: 1,
    name: 'Leannne ',
    email: 'sincere.april.biz',
    phNumber: '1-77-234-567',
    website: 'www.leannne.april.biz'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeComponent ],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule
      ],
      providers: [
        { provide: MatDialog, useClass: MatDialogMock },
        { provide: MatDialogRef, useValue: model},
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.employee).toEqual(new MockEmpService().data[0]);
  });
});

