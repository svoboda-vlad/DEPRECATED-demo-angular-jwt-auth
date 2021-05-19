import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrencyCode, CurrencyCodeService } from '../currency-code/currency-code.service';

@Component({
  selector: 'daja-currency-code-detail',
  templateUrl: './currency-code-detail.component.html',
  styleUrls: ['./currency-code-detail.component.scss']
})
export class CurrencyCodeDetailComponent implements OnInit, OnDestroy {

  currencyCode$: Observable<CurrencyCode> = null;
  error: Object = null;
  currencyCodeDetailSubscription: Subscription;

  constructor(private currencyCodeService: CurrencyCodeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currencyCodeDetailSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.currencyCode$ = this.currencyCodeService.getCurrencyCode(id).pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
    });
  }

  ngOnDestroy() {
    this.currencyCodeDetailSubscription.unsubscribe();
  }  

}
