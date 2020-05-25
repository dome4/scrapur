import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectIframeComponent } from './inspect-iframe.component';

describe('InspectIframeComponent', () => {
  let component: InspectIframeComponent;
  let fixture: ComponentFixture<InspectIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
