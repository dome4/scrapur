import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapingFooterComponent } from './scraping-footer.component';

describe('ScrapingFooterComponent', () => {
  let component: ScrapingFooterComponent;
  let fixture: ComponentFixture<ScrapingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
