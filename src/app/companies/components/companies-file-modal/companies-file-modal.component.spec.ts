import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesFileModalComponent } from './companies-file-modal.component';

describe('CompaniesFileModalComponent', () => {
  let component: CompaniesFileModalComponent;
  let fixture: ComponentFixture<CompaniesFileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesFileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
