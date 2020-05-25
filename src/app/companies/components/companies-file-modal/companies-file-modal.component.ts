import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompaniesService } from 'src/app/shared/state/companies/companies.service';
import { Company } from 'src/app/shared/state/companies/company.model';

@Component({
  selector: 'app-companies-file-modal',
  templateUrl: './companies-file-modal.component.html',
  styleUrls: ['./companies-file-modal.component.scss']
})
export class CompaniesFileModalComponent implements OnInit {

  @Input() fileModalOpen: boolean = false;
  @Output() fileModalOpenChange = new EventEmitter<boolean>();

  private newCompanies: Company[] = [];

  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit(): void { }

  public onFileModalOpenChanged(fileModalOpen: boolean) {
    this.fileModalOpen = fileModalOpen;
    this.fileModalOpenChange.emit(fileModalOpen);
  }

  public onFileUploaded(file: any) {
    console.log('file: ', file);

    // TODO: validate json

    this.newCompanies = file;
  }

  public onCancel() {
    this.newCompanies = [];
    this.fileModalOpen = false;
  }

  public onSubmit() {
    this.fileModalOpen = false;
    if (this.newCompanies && Array.isArray(this.newCompanies) && this.newCompanies.length > 0) {
      this.companiesService.addCompanies(this.newCompanies);
    }

  }

}
