import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { CurrencyCode, CurrencyCodeService } from '../currency-code/currency-code.service';
import { ExchangeRate, ExchangeRateService } from '../exchange-rate/exchange-rate.service';

@Component({
  selector: 'daja-exchange-rate-currency-code',
  templateUrl: './exchange-rate-currency-code.component.html',
  styleUrls: ['./exchange-rate-currency-code.component.scss']
})
export class ExchangeRateCurrencyCodeComponent implements OnInit, OnDestroy {

  exchangeRateError = false;
  currencyCodeError: Object = null;
  currencyCode: CurrencyCode = null;
  exchangeRates$: Observable<ExchangeRate[]> = null;
  error: Object = null;
  exchangeRateCurrencyCodeSubscription: Subscription;

  constructor(private exchangeRateService: ExchangeRateService,
    private currencyCodeService: CurrencyCodeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.exchangeRateCurrencyCodeSubscription = this.route.params.pipe(concatMap(params => {
      const id = params['id'];
      return this.currencyCodeService.getCurrencyCode(id);
    })).subscribe(
      currCode => {
        this.currencyCode = currCode;
        this.exchangeRates$ = this.exchangeRateService.getExchangeRatesByCurrencyCode(this.currencyCode).pipe(
          catchError(err => {
            this.error = err;
            return throwError(err);
          })
        );
      },
      err => {
        this.currencyCodeError = err;
        return throwError(err);
      }
    );
  }

  ngOnDestroy() {
    this.exchangeRateCurrencyCodeSubscription.unsubscribe();
  }  

}
