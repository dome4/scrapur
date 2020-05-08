import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CompaniesService } from '../../../core/companies/companies.service';
import { Observable } from 'rxjs';
import { Company } from '../../../core/companies/company.model';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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
}
