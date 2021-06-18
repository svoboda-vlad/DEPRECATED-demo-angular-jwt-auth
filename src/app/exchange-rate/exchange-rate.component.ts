import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ExchangeRate, ExchangeRateService } from './exchange-rate.service';
import { catchError } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'daja-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  exchangeRates$: Observable<ExchangeRate[]> = null;
  error: Object = null;

  exchangeRateDateFilterForm = this.fb.group({
    rateDate: [new Date().toISOString().substring(0,10), [Validators.required]]
  });

  constructor(private exchangeRateService: ExchangeRateService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.exchangeRates$ = this.exchangeRateService.getExchangeRatesByDate(new Date()).pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    );
  }

  getExchangeRatesByDate(): void {
    const msec = Date.parse(this.exchangeRateDateFilterForm.get('rateDate').value);
    const date = new Date(msec);
    this.exchangeRates$ = this.exchangeRateService.getExchangeRatesByDate(date).pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    );
  }

  get rateDate() { return this.exchangeRateDateFilterForm.get('rateDate'); }

}
