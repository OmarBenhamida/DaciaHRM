import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployePostComponent } from './employe-post.component';

describe('EmployePostComponent', () => {
  let component: EmployePostComponent;
  let fixture: ComponentFixture<EmployePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
