import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewEmployeesComponent} from './view-employees.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../employee.service';
import {Employee} from '../interfaces/employee.intreface';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {of} from 'rxjs';

describe('ViewEmployeesComponent', () => {
  let component: ViewEmployeesComponent;
  let fixture: ComponentFixture<ViewEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEmployeesComponent],
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
        { provide: EmployeeService, useClass: MockEmpService }
  ]

    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnIt', () => {
    component.ngOnInit();
    const employeeService = new MockEmpService();
    expect(component.dataSource.data).toEqual(employeeService.data);
  });
  it('should call getEmployees() of employeeService on component Init', () => {
    spyOn(component.employeeService, 'getEmployees').and.callThrough();
    component.ngOnInit();
    expect(component.employeeService.getEmployees).toHaveBeenCalled();
    const employeeService = new MockEmpService();
    expect(component.dataSource.data).toEqual(employeeService.data);
  });
  it('should call updateEmployee() of employeeService ', () => {
    spyOn(component.employeeService, 'updateEmployee').and.callThrough();
    const empService = new MockEmpService();
    component.openModal(empService.data[0]);
    expect(component.employeeService.updateEmployee).toHaveBeenCalled();
    const employeeService = new MockEmpService();
  });

  it('should OpenModal', () => {
    const employeeService = new MockEmpService();
    component.dataSource = new MatTableDataSource<Employee>(employeeService.data);
    component.openModal(employeeService.data[0]);
    expect(component.dataSource.data).toEqual(employeeService.data);
  });
 });

export class MockEmpService {
  data = [
    {
      'id': 1,
      'name': 'Leannne ',
      'email': 'sincere.april.biz',
      'phNumber': '1-77-234-567',
      'website': 'www.leannne.april.biz'
    },
    {
      'id': 2,
      'name': 'Ervin Howell',
      'email': 'shanna@melissa.tv',
      'phNumber': '010-692-6593 x09125',
      'website': 'www.anastasia.net'
    },
    {
      'id': 3,
      'name': 'Clementine Bauch',
      'email': 'nathan@yesenia.net',
      'phNumber': '1-463-123-4447',
      'website': 'www.ramiro.info'
    },
    {
      'id': 4,
      'name': 'Patricia Lebsack',
      'email': 'julianne.OConner@kory.org',
      'phNumber': '493-170-9623 x156',
      'website': 'www.kale.biz'
    },
    {
      'id': 5,
      'name': 'Chelsey Dietrich',
      'email': 'lucio_Hettinger@annie.ca',
      'phNumber': '(254)954-1289',
      'website': 'www.demarco.info'
    },
    {
      'id': 6,
      'name': 'Mrs. Afgfdgdfgfdhfhbfg',
      'email': 'Karley_Dach@jasper.info',
      'phNumber': '1-477-935-8478 x6430',
      'website': 'www.ola.org'
    },
    {
      'id': 7,
      'name': 'Kurtis Weissnat',
      'email': 'Telly.Hoeger@billy.biz',
      'phNumber': '210.067.6132',
      'website': 'www.elvis.io'
    },
    {
      'id': 8,
      'name': 'Nicholas Runolfsdottir V',
      'email': 'Sherwood@rosamond.me',
      'phNumber': '586.493.6943 x140',
      'website': 'www.jacynthe.com'
    },
    {
      'id': 9,
      'name': 'Glenna Reichert',
      'email': 'Chaim_McDermott@dana.io',
      'phNumber': '(775)976-6794 x41206',
      'website': 'www.conrad.com'
    },
    {
      'id': 10,
      'name': 'Clementina DuBuque',
      'email': 'Rey.Padberg@karina.biz',
      'phNumber': '024-648-3804',
      'website': 'www.ambrose.net'
    }
  ];

  getEmployees() {
    return of( this.data );
  }
  updateEmployee(emp: Employee) {
    return of( this.data );
  }
}
export class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}
