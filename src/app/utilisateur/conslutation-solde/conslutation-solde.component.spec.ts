import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConslutationSoldeComponent } from './conslutation-solde.component';

describe('ConslutationSoldeComponent', () => {
  let component: ConslutationSoldeComponent;
  let fixture: ComponentFixture<ConslutationSoldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConslutationSoldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConslutationSoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
