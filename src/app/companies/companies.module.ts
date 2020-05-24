import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesComponent } from './companies.component';
import { Routes, RouterModule } from '@angular/router';

const COMPONENTS = [
  CompaniesComponent
];

const ROUTES: Routes = [{ path: '', component: CompaniesComponent }];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CompaniesModule { }
