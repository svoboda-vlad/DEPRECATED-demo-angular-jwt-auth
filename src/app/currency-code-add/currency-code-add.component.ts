import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyCode, CurrencyCodeService } from '../currency-code/currency-code.service';

@Component({
  selector: 'daja-currency-code-add',
  templateUrl: './currency-code-add.component.html',
  styleUrls: ['./currency-code-add.component.scss']
})
export class CurrencyCodeAddComponent implements OnInit {

  currencyCodeAddError = false;
  error: Object = null;

  currencyCodeAddForm = this.fb.group({
    currencyCode: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    country: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    rateQty: [0, [Validators.required, Validators.min(1)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private currencyCodeService: CurrencyCodeService
  ) { }

  ngOnInit(): void {
  }

  addNewCurrencyCode(): void {
    const currencyCode: CurrencyCode = new CurrencyCode(
      this.currencyCodeAddForm.get('currencyCode')!.value,
      this.currencyCodeAddForm.get('country')!.value,
      this.currencyCodeAddForm.get('rateQty')!.value
    );
    this.currencyCodeService
      .postCurrencyCode(currencyCode)
      .subscribe(
        () => {
          this.currencyCodeAddError = false;
          this.router.navigate(['/currency-code']);
        },
        () => this.currencyCodeAddError = true
      );
  }

  get currencyCode() { return this.currencyCodeAddForm.get('currencyCode'); }

  get country() { return this.currencyCodeAddForm.get('country'); }

  get rateQty() { return this.currencyCodeAddForm.get('rateQty'); }

}
