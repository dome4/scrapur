import { Component, OnInit, OnDestroy } from '@angular/core';
import { InspectService } from '../../services/inspect/inspect.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Company } from 'src/app/shared/state/companies/company.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inspect-iframe',
  templateUrl: './inspect-iframe.component.html',
  styleUrls: ['./inspect-iframe.component.scss']
})
export class InspectIframeComponent implements OnInit, OnDestroy {

  // url used in the iframe
  public urlSafe: SafeResourceUrl;

  private subscription: Subscription = null;

  constructor(
    private inspectService: InspectService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.subscription =
      this.inspectService.selectedCompany$.subscribe((company: Company) => {
        if (company && company.web) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(company.web);
        } else {
          this.urlSafe = null;
        }
      });
  }

  ngOnDestroy(): void {
    try {
      this.subscription.unsubscribe();
    } catch (err) { }
  }
}
