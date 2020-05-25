import { Component, OnInit } from '@angular/core';
import { InspectService } from '../../services/inspect/inspect.service';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/shared/state/companies/company.model';

@Component({
  selector: 'app-inspect-footer',
  templateUrl: './inspect-footer.component.html',
  styleUrls: ['./inspect-footer.component.scss']
})
export class InspectFooterComponent implements OnInit {

  public selectedCompany: Company = null;

  constructor(
    private inspectService: InspectService
  ) { }

  ngOnInit(): void {
    this.inspectService.selectedCompany$.subscribe((company: Company) => {

      // check if all in the form used properties are defined
      if (company && company.name) {
        this.selectedCompany = company;
      } else {
        this.selectedCompany = null;
      }
    });
  }

  public onSubmit(form: NgForm) {
    console.log('form value:', form);
  }

}
