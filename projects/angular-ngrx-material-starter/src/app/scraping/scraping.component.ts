import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrapingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
