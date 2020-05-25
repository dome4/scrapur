import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { InspectComponent } from './inspect.component';
import { Routes, RouterModule } from '@angular/router';
import { InspectFooterComponent } from './components/inspect-footer/inspect-footer.component';
import { InspectIframeComponent } from './components/inspect-iframe/inspect-iframe.component';
import { InspectService } from './services/inspect/inspect.service';

const COMPONENTS = [
  InspectComponent,
  InspectFooterComponent,
  InspectIframeComponent
];

const ROUTES: Routes = [{ path: '', component: InspectComponent }];

const PROVIDERS = [
  InspectService
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [...PROVIDERS]
})
export class InspectModule { }
