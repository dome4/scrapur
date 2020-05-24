import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { CompaniesStateInvalidData, CompaniesStateInvalidCompany } from './companies.error';
import { remove } from 'lodash';

const dummyData: Company[] = [
  {
    id: '1',
    name: 'Angular',
    phone: '01234567',
    web: 'https://angular.io/',
    mail: 'info@angular.io',
    employeeCount: 20,
    location: 'USA',
    validData: true,
    addedToHubspot: false
  }
];

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  // private companies$ = new BehaviorSubject<Company[]>([]);
  private companies$ = new BehaviorSubject<Company[]>(dummyData);

  constructor() { }

  public async addCompany(company: Company): Promise<void> {
    const companies: Company[] = await this.getCurrentState();
    if (!companies || !Array.isArray(companies) || !company) {
      throw new CompaniesStateInvalidData('Companies state - invalid data');
    }
    companies.push(company);
    this.companies$.next(companies);
  }

  public async addCompanies(newCompanies: Company[]): Promise<void> {
    let companies: Company[] = await this.getCurrentState();
    if (!companies || !Array.isArray(companies) || !newCompanies || !Array.isArray(newCompanies)) {
      throw new CompaniesStateInvalidData('Companies state - invalid data');
    }
    companies = [
      ...companies,
      ...newCompanies
    ];
    this.companies$.next(companies);
  }

  public async deleteCompanyById(id: string): Promise<void> {
    const companies: Company[] = await this.getCurrentState();
    if (!companies || !Array.isArray(companies) || !id) {
      throw new CompaniesStateInvalidData('Companies state - invalid data');
    }
    remove(companies, (company: Company) => company.id === id);
    this.companies$.next(companies);
  }

  public async updateCompany(newCompany: Company): Promise<void> {
    const companies: Company[] = await this.getCurrentState();
    if (!companies || !Array.isArray(companies) || !newCompany) {
      throw new CompaniesStateInvalidData('Companies state - invalid data');
    }

    const index: number = companies.findIndex((company: Company) => company.id === newCompany.id);
    if (index === -1) {
      throw new CompaniesStateInvalidCompany('Companies state - invalid company');
    }

    companies.splice(index, 1, newCompany);
    this.companies$.next(companies);
  }

  public getCompanyById$(id: string): Observable<Company> {
    return this.companies$.pipe(
      map((companies: Company[]) => {
        if (!companies || !Array.isArray(companies) || !id) {
          throw new CompaniesStateInvalidData('Companies state - invalid data');
        }
        return companies.find((company: Company) => company.id === id);
      })
    );
  }

  public getCompanies$(): Observable<Company[]> {
    return this.companies$;
  }

  private getCurrentState(): Promise<Company[]> {
    return this.companies$.pipe(
      take(1)
    ).toPromise();
  }
}
