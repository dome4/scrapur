import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapingComponent } from './scraping.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ScrapingComponent
  }
];

const COMPONENTS = [
  ScrapingComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScrapingModule { }
