import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Company } from 'src/app/shared/state/companies/company.model';

@Injectable()
export class InspectService {

  public selectedCompany$: ReplaySubject<Company> = new ReplaySubject<Company>(1);

  constructor() { }

  public nextCompany(): void {

  }

  public previousCompany(): void {

  }
}
