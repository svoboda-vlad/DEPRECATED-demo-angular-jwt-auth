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
  exchangeRateByCurrencyCodeUrl = 'exchange-rate/currency-code';
  exchangeRateByDateUrl = 'exchange-rate/date';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getExchangeRatesByDate(date: Date) : Observable<ExchangeRate[]> {
    const formattedDate = date.toISOString().slice(0, 10);
    return this.http.get<ExchangeRate[]>(environment.SERVER_URL + this.exchangeRateByDateUrl + '/' + formattedDate).pipe(
      catchError(this.errorResponseService.handleError));
  }

  postExchangeRate(exchangeRate: ExchangeRate) : Observable<ExchangeRate> {
    return this.http.post<ExchangeRate>(environment.SERVER_URL + this.exchangeRateUrl, exchangeRate).pipe(
      catchError(this.errorResponseService.handleError));
  }

  getExchangeRatesByCurrencyCode(currencyCode: CurrencyCode) : Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(environment.SERVER_URL + this.exchangeRateByCurrencyCodeUrl + '/' + currencyCode.id).pipe(
      catchError(this.errorResponseService.handleError));
  }

  getExchangeRate(id: number) : Observable<ExchangeRate> {
    return this.http.get<ExchangeRate>(environment.SERVER_URL + this.exchangeRateUrl + '/' + id).pipe(
      catchError(this.errorResponseService.handleError));
  }

  deleteExchangeRate(id: number) : Observable<void> {
    return this.http.delete<void>(environment.SERVER_URL + this.exchangeRateUrl + '/' + id).pipe(
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
