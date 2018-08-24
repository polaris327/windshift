import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuotePageRoutingModule } from './quote-page-routing.module';
import { QuotePageComponent } from './quote-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuotePageRoutingModule
  ],
  declarations: [QuotePageComponent]
})
export class QuotePageModule { }
