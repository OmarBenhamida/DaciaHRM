import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreMisionComponent } from './ordre-mision.component';

describe('OrdreMisionComponent', () => {
  let component: OrdreMisionComponent;
  let fixture: ComponentFixture<OrdreMisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreMisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
