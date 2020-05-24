import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { InspectComponent } from './inspect.component';
import { Routes, RouterModule } from '@angular/router';

const COMPONENTS = [
  InspectComponent
];

const ROUTES: Routes = [{ path: '', component: InspectComponent }];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class InspectModule { }
