import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'anms-scraping-footer',
  templateUrl: './scraping-footer.component.html',
  styleUrls: ['./scraping-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrapingFooterComponent implements OnInit {
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  // company form
  public form = this.fb.group({
    name: [''],
    phone: [''],
    url: [''],
    email: ['', [Validators.email]],
    validData: [''],
    addedToHubspot: [''],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log('form submitted');
    console.log(this.form.value);
  }

}
