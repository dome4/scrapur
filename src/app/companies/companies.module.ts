import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesComponent } from './companies.component';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';

const COMPONENTS = [
  CompaniesComponent,
  CompaniesListComponent
];

const ROUTES: Routes = [
  {
    path: '', component: CompaniesComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CompaniesListComponent }
    ]
  }
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CompaniesModule { }
