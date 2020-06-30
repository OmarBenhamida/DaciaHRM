import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeContratComponent } from './employe-contrat.component';

describe('EmployeContratComponent', () => {
  let component: EmployeContratComponent;
  let fixture: ComponentFixture<EmployeContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
