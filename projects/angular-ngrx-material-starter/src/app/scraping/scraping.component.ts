import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'anms-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrapingComponent implements OnInit {

  private url: string = 'https://angular.io/api/router/RouterLink';

  // url used in the iframe
  public urlSafe: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
