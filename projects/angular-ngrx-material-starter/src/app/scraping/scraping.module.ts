import { NgModule } from '@angular/core';
import { ScrapingComponent } from './scraping.component';
import { Routes, RouterModule } from '@angular/router';
import { ScrapingService } from './services/scraping/scraping.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { ScrapingFooterComponent } from './components/scraping-footer/scraping-footer.component';

const routes: Routes = [
  {
    path: '',
    component: ScrapingComponent
  }
];

const COMPONENTS = [
  ScrapingComponent,
  ScrapingFooterComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),

    // material
    MatFormFieldModule,
    MatIconModule

  ],
  providers: [ScrapingService]
})
export class ScrapingModule { }
