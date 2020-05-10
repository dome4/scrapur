import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CompaniesService } from '../../../core/companies/companies.service';
import { Observable } from 'rxjs';
import { Company } from '../../../core/companies/company.model';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'anms-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent implements OnInit {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  public companies$: Observable<Company[]> = null;

  public displayedColumns: string[] = ['name', 'phone', 'web', 'mail', 'employeeCount', 'location', 'validData', 'addedToHubspot'];

  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.companies$ = this.companiesService.getCompanies$();
  }

  public onImportCompanies(companies: Company[]) {
    console.log('imported file: ', companies);

    // prepare json array of companies
    // TODO: validate json schema: https://github.com/ajv-validator/ajv

    this.companiesService.addCompanies(companies);
  }
}
