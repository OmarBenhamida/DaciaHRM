import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatFpComponent } from './etat-fp.component';

describe('EtatFpComponent', () => {
  let component: EtatFpComponent;
  let fixture: ComponentFixture<EtatFpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatFpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
