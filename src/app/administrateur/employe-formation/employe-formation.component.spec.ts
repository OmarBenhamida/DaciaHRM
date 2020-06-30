import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeFormationComponent } from './employe-formation.component';

describe('EmployeFormationComponent', () => {
  let component: EmployeFormationComponent;
  let fixture: ComponentFixture<EmployeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
