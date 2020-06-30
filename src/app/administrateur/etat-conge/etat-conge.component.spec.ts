import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatCongeComponent } from './etat-conge.component';

describe('EtatCongeComponent', () => {
  let component: EtatCongeComponent;
  let fixture: ComponentFixture<EtatCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
