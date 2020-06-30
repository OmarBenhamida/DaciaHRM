import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatOmComponent } from './etat-om.component';

describe('EtatOmComponent', () => {
  let component: EtatOmComponent;
  let fixture: ComponentFixture<EtatOmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatOmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatOmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
