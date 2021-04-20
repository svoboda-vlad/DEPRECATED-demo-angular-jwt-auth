import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CurrencyCode, CurrencyCodeService } from './currency-code.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'daja-currency-code',
  templateUrl: './currency-code.component.html',
  styleUrls: ['./currency-code.component.scss']
})
export class CurrencyCodeComponent implements OnInit {

  currencyCodes$: Observable<CurrencyCode[]> = null;
  error: Object = null;

  constructor(private currencyCodeService: CurrencyCodeService) { }

  ngOnInit(): void {
      this.currencyCodes$ = this.currencyCodeService.getCurrencyCodes().pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

}
