import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCompetenceComponent } from './employe-competence.component';

describe('EmployeCompetenceComponent', () => {
  let component: EmployeCompetenceComponent;
  let fixture: ComponentFixture<EmployeCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
