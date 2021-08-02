import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrencyCode, CurrencyCodeService } from '../currency-code/currency-code.service';

@Component({
  selector: 'daja-currency-code-edit',
  templateUrl: './currency-code-edit.component.html',
  styleUrls: ['./currency-code-edit.component.scss']
})
export class CurrencyCodeEditComponent implements OnInit, OnDestroy {

  currencyCodeUpdateError = false;
  error: Object = null;
  currencyCodeUpdateSubscription: Subscription;
  currencyCodeDetailSubscription: Subscription;
  currencyCodeObject: CurrencyCode = null;

  currencyCodeEditForm = this.fb.group({
    currencyCode: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    country: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    rateQty: [0, [Validators.required, Validators.min(1)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private currencyCodeService: CurrencyCodeService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currencyCodeDetailSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.currencyCodeService.getCurrencyCode(id).pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      ).subscribe(code => {
        this.currencyCodeObject = code;
        this.currencyCodeEditForm.patchValue({
          currencyCode: code.currencyCode,
          country: code.country,
          rateQty: code.rateQty
        });
      });
    });
  }

  updateCurrencyCode(): void {
    const currencyCode: CurrencyCode = new CurrencyCode(
      this.currencyCodeEditForm.get('currencyCode')!.value,
      this.currencyCodeEditForm.get('country')!.value,
      this.currencyCodeEditForm.get('rateQty')!.value
    );
    currencyCode.id = this.currencyCodeObject.id;
    this.currencyCodeUpdateSubscription = this.currencyCodeService
      .updateCurrencyCode(currencyCode)
      .subscribe(
        () => {
          this.currencyCodeUpdateError = false;
          this.router.navigate(['/currency-code']);
        },
        () => this.currencyCodeUpdateError = true
      );
  }

  get currencyCode() { return this.currencyCodeEditForm.get('currencyCode'); }

  get country() { return this.currencyCodeEditForm.get('country'); }

  get rateQty() { return this.currencyCodeEditForm.get('rateQty'); }

  ngOnDestroy() {
    this.currencyCodeDetailSubscription.unsubscribe();
    if (this.currencyCodeUpdateSubscription != null) this.currencyCodeUpdateSubscription.unsubscribe();
  }

}
