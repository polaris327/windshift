import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotePageComponent } from './quote-page.component';

const routes: Routes = [
  // {path: '', component: QuotePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotePageRoutingModule { }
