import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CompanyImportComponent } from './components/company-import/company-import.component';
import { FilePickerDirective } from './directives/file-picker.directive';

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
  CompanyDetailComponent,
  CompanyImportComponent,

  FilePickerDirective
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),

    // material
    MatPaginatorModule,
    MatTableModule,
  ]
})
export class CompanyModule { }
