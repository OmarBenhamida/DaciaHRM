import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilPaieComponent } from './feuil-paie.component';

describe('FeuilPaieComponent', () => {
  let component: FeuilPaieComponent;
  let fixture: ComponentFixture<FeuilPaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuilPaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuilPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
