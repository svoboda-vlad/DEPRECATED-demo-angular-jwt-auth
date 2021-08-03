import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ExchangeRate, ExchangeRateService } from '../exchange-rate/exchange-rate.service';

@Component({
  selector: 'daja-exchange-rate-detail',
  templateUrl: './exchange-rate-detail.component.html',
  styleUrls: ['./exchange-rate-detail.component.scss']
})
export class ExchangeRateDetailComponent implements OnInit, OnDestroy {

  exchangeRate$: Observable<ExchangeRate> = null;
  error: Object = null;
  exchangeRateDetailSubscription: Subscription;
  deleteExchangeRateSubscription: Subscription;
  deleteError: Object = null;

  constructor(private exchangeRateService: ExchangeRateService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.exchangeRateDetailSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.exchangeRate$ = this.exchangeRateService.getExchangeRate(id).pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
    });
  }

  ngOnDestroy() {
    this.exchangeRateDetailSubscription.unsubscribe();
    if (this.deleteExchangeRateSubscription != null) this.deleteExchangeRateSubscription.unsubscribe();
  }

  deleteExchangeRate(id: number) {
    this.deleteExchangeRateSubscription = this.exchangeRateService.deleteExchangeRate(id)
      .subscribe(() => {
        this.deleteError = false;
        this.router.navigate(['/currency-code/']);
      },
      () => this.deleteError = true);
  }

}
