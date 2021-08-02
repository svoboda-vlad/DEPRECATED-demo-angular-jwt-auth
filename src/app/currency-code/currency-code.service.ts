import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyCodeService {
  currencyCodeUrl = 'currency-code';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getCurrencyCodes() : Observable<CurrencyCode[]> {
    return this.http.get<CurrencyCode[]>(environment.SERVER_URL + this.currencyCodeUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  postCurrencyCode(currencyCode: CurrencyCode) : Observable<CurrencyCode> {
    return this.http.post<CurrencyCode>(environment.SERVER_URL + this.currencyCodeUrl, currencyCode).pipe(
      catchError(this.errorResponseService.handleError));
  }

  getCurrencyCode(id: number) : Observable<CurrencyCode> {
    return this.http.get<CurrencyCode>(environment.SERVER_URL + this.currencyCodeUrl + "/" + id).pipe(
      catchError(this.errorResponseService.handleError));
  }

  deleteCurrencyCode(id: number) : Observable<void> {
    return this.http.delete<void>(environment.SERVER_URL + this.currencyCodeUrl + "/" + id).pipe(
      catchError(this.errorResponseService.handleError));
  }

  updateCurrencyCode(currencyCode: CurrencyCode) : Observable<CurrencyCode> {
    return this.http.put<CurrencyCode>(environment.SERVER_URL + this.currencyCodeUrl + "/" + currencyCode.id, currencyCode).pipe(
      catchError(this.errorResponseService.handleError));
  }

}

export class CurrencyCode {
  id: number;
  currencyCode: string;
  country: string;
  rateQty: number;

  constructor(currencyCode: string, country: string, rateQty: number) {
    this.currencyCode = currencyCode;
    this.country = country;
    this.rateQty = rateQty;
  }
}
