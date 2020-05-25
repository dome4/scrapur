import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectFooterComponent } from './inspect-footer.component';

describe('InspectFooterComponent', () => {
  let component: InspectFooterComponent;
  let fixture: ComponentFixture<InspectFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
