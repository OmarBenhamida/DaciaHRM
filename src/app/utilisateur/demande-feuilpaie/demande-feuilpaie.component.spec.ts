import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFeuilpaieComponent } from './demande-feuilpaie.component';

describe('DemandeFeuilpaieComponent', () => {
  let component: DemandeFeuilpaieComponent;
  let fixture: ComponentFixture<DemandeFeuilpaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeFeuilpaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFeuilpaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
