import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeRetardComponent } from './employe-retard.component';

describe('EmployeRetardComponent', () => {
  let component: EmployeRetardComponent;
  let fixture: ComponentFixture<EmployeRetardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeRetardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
