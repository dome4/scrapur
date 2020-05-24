import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectComponent } from './inspect.component';
import { Routes, RouterModule } from '@angular/router';

const COMPONENTS = [
  InspectComponent
];

const ROUTES: Routes = [{ path: '', component: InspectComponent }];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class InspectModule { }
