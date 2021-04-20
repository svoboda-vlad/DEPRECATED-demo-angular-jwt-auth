import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CurrencyCode } from '../currency-code/currency-code.service';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  exchangeRateUrl = 'exchange-rate';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getExchangeRates() : Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(environment.SERVER_URL + this.exchangeRateUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  postExchangeRate(exchangeRate: ExchangeRate) : Observable<ExchangeRate> {
    return this.http.post<ExchangeRate>(environment.SERVER_URL + this.exchangeRateUrl, exchangeRate).pipe(
      catchError(this.errorResponseService.handleError));
  }

}

export class ExchangeRate {
  id: number;
  rateDate: Date;
  rate: number;
  currencyCode: CurrencyCode;

  constructor(rateDate: Date, rate: number, currencyCode: CurrencyCode) {
      this.rateDate = rateDate;
      this.rate = rate;
      this.currencyCode = currencyCode;
  }
}
