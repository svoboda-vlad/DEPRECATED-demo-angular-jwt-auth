import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ExchangeRate, ExchangeRateService } from '../exchange-rate/exchange-rate.service';

@Component({
  selector: 'daja-exchange-rate-edit',
  templateUrl: './exchange-rate-edit.component.html',
  styleUrls: ['./exchange-rate-edit.component.scss']
})
export class ExchangeRateEditComponent implements OnInit, OnDestroy {

  exchangeRateUpdateError = false;
  error: Object = null;
  exchangeRateUpdateSubscription: Subscription;
  exchangeRateDetailSubscription: Subscription;
  exchangeRateObject: ExchangeRate = null;
  exchangeRate$: Observable<ExchangeRate> = null;

  exchangeRateEditForm = this.fb.group({
    rateDate: [null, [Validators.required]],
    rate: [0, [Validators.required, Validators.min(0.001)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private exchangeRateService: ExchangeRateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.exchangeRateDetailSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.exchangeRate$ = this.exchangeRateService.getExchangeRate(id).pipe(
        map(rate => {
          this.exchangeRateObject = rate;
          this.exchangeRateEditForm.patchValue({
            rateDate: rate.rateDate,
            rate: rate.rate
          });
          return rate;
        }),
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      )
    });
  }

  updateExchangeRate(): void {
    const exchangeRate: ExchangeRate = new ExchangeRate(
      this.exchangeRateEditForm.get('rateDate')!.value,
      this.exchangeRateEditForm.get('rate')!.value,
      this.exchangeRateObject.currencyCode
    );
    exchangeRate.id = this.exchangeRateObject.id;
    this.exchangeRateUpdateSubscription = this.exchangeRateService
      .updateExchangeRate(exchangeRate)
      .subscribe(
        () => {
          this.exchangeRateUpdateError = false;
          this.router.navigate(['/exchange-rate/', this.exchangeRateObject.id, 'detail']);
        },
        () => this.exchangeRateUpdateError = true
      );
  }

  get rateDate() { return this.exchangeRateEditForm.get('rateDate'); }

  get rate() { return this.exchangeRateEditForm.get('rate'); }

  ngOnDestroy() {
    this.exchangeRateDetailSubscription.unsubscribe();
    if (this.exchangeRateUpdateSubscription != null) this.exchangeRateUpdateSubscription.unsubscribe();
  }

}
