import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeIndimnteComponent } from './employe-indimnte.component';

describe('EmployeIndimnteComponent', () => {
  let component: EmployeIndimnteComponent;
  let fixture: ComponentFixture<EmployeIndimnteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeIndimnteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeIndimnteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
