import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotePageRoutingModule } from './quote-page-routing.module';
import { QuotePageComponent } from './quote-page.component';

@NgModule({
  imports: [
    CommonModule,
    QuotePageRoutingModule
  ],
  declarations: [QuotePageComponent]
})
export class QuotePageModule { }
