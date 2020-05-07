import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CompanyListComponent },
      { path: ':id', component: CompanyDetailComponent }
    ]
  }
];

const COMPONENTS = [
  CompanyComponent,
  CompanyListComponent,
  CompanyDetailComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CompanyModule { }
