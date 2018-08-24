import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ws-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.scss']
})
export class QuotePageComponent implements OnInit {
  quoteForm: FormGroup;
  quoteFormErrors: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.quoteFormErrors = {
      firstName: {},
      lastName: {},
      middleInitial: {},
      address: {},
      occupancyType: {},
      yearBuilt: {},
      squareFootage: {}
    };

    this.quoteForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleInitial: ['', Validators.required],
      address: ['', Validators.required],
      occupancyType: ['', Validators.required],
      yearBuilt: ['', Validators.required],
      squareFootage: ['', Validators.required]
    });

    this.formValuesChanged();
    this.quoteForm.valueChanges.subscribe(() => {
      this.formValuesChanged();
    });
  }

  formValuesChanged() {
    for (const field in this.quoteFormErrors) {
      if (this.quoteFormErrors.hasOwnProperty(field)) {
        this.quoteFormErrors[field] = {};

        const control = this.quoteForm.get(field);

        if (control && control.dirty && !control.valid) {
          this.quoteFormErrors[field] = control.errors;
        }
      }
    }
  }

  getMyQuote() {
    console.log('Form Submitted!');
  }
}
