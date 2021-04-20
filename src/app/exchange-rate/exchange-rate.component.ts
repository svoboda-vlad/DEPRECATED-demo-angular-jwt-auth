import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ExchangeRate, ExchangeRateService } from './exchange-rate.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'daja-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  exchangeRates$: Observable<ExchangeRate[]> = null;
  error: Object = null;

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
      this.exchangeRates$ = this.exchangeRateService.getExchangeRates().pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

}
