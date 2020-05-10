import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Company } from '../core/companies/company.model';

@Component({
  selector: 'anms-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrapingComponent implements OnInit {

  // url used in the iframe
  public urlSafe: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void { }

  public onCompanyChanged(company: Company) {
    console.log('company changed: ', company);

    if (company && company.web) {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(company.web);
    } else {
      this.urlSafe = null;
    }
  }

}
