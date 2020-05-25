import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CompaniesComponent } from './companies.component';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompaniesFileModalComponent } from './components/companies-file-modal/companies-file-modal.component';

const COMPONENTS = [
  CompaniesComponent,
  CompaniesListComponent,
  CompaniesFileModalComponent
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
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CompaniesModule { }
