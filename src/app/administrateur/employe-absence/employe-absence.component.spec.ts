import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAbsenceComponent } from './employe-absence.component';

describe('EmployeAbsenceComponent', () => {
  let component: EmployeAbsenceComponent;
  let fixture: ComponentFixture<EmployeAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
