import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/shared/state/companies/companies.service';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/state/companies/company.model';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  public companies$: Observable<Company[]> = null;

  public showFileModal: boolean = false;

  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.companies$ = this.companiesService.getCompanies$();
  }
}
