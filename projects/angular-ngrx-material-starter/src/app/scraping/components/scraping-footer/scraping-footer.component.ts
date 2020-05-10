import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { CompaniesService } from '../../../core/companies/companies.service';
import { Company } from '../../../core/companies/company.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'anms-scraping-footer',
  templateUrl: './scraping-footer.component.html',
  styleUrls: ['./scraping-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrapingFooterComponent implements OnInit, OnDestroy {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  // company form
  public form = this.fb.group({
    name: [''],
    phone: [''],
    url: [''],
    email: ['', [Validators.email]],
    validData: [''],
    addedToHubspot: [''],
  });

  private companies: Company[] = [];
  public selectedCompany: Company = null;

  @Output() companyChanged = new EventEmitter<Company>();

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.companiesService.getCompanies$()
        .subscribe((companies: Company[]) => this.companies = companies)
    );
  }

  ngOnDestroy(): void {
    try {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    } catch (err) { }
  }

  public onSubmit(): void {
    console.log('form submitted');
    console.log(this.form.value);
  }

  public onPrevious() {
    try {
      const index: number = this.getCompanyIndex();

      // company not found
      if (index === -1) {
        throw new Error('company not found');
      }

      this.selectedCompany = this.companies[index - 1];
    } catch (err) {
      console.log('onPrevious error: ', err);
      // select first element
      this.selectedCompany = this.companies[0];
    }
  }

  public onNext() {
    console.log('get next company');
  }

  private getCompanyIndex(): number {
    try {
      return this.companies.findIndex(company => company.id === this.selectedCompany.id);
    } catch (err) {
      return -1;
    }
  }

}
