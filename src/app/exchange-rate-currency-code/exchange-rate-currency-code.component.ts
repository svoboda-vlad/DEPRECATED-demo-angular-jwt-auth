import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrencyCode, CurrencyCodeService } from '../currency-code/currency-code.service';
import { ExchangeRate, ExchangeRateService } from '../exchange-rate/exchange-rate.service';

@Component({
  selector: 'daja-exchange-rate-currency-code',
  templateUrl: './exchange-rate-currency-code.component.html',
  styleUrls: ['./exchange-rate-currency-code.component.scss']
})
export class ExchangeRateCurrencyCodeComponent implements OnInit {

  exchangeRateError = false;
  currencyCodeError: Object = null;
  currencyCode: CurrencyCode = null;
  exchangeRates$: Observable<ExchangeRate[]> = null;
  error: Object = null;

  constructor(private exchangeRateService: ExchangeRateService,
    private currencyCodeService: CurrencyCodeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.currencyCodeService.getCurrencyCode(id).subscribe(
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
      )
    });
  }

}
