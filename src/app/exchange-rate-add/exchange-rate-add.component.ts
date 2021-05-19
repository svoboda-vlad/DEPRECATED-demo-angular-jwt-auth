import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CurrencyCode, CurrencyCodeService } from '../currency-code/currency-code.service';
import { ExchangeRate, ExchangeRateService } from '../exchange-rate/exchange-rate.service';

@Component({
  selector: 'daja-exchange-rate-add',
  templateUrl: './exchange-rate-add.component.html',
  styleUrls: ['./exchange-rate-add.component.scss']
})
export class ExchangeRateAddComponent implements OnInit, OnDestroy {

  exchangeRateAddError = false;
  currencyCodeError: Object = null;
  currencyCode: CurrencyCode = null;
  currencyCodeSubscription: Subscription;
  exchangeRateAddSubscription: Subscription;

  exchangeRateAddForm = this.fb.group({
    rateDate: [null, [Validators.required]],
    rate: [0, [Validators.required, Validators.min(0.001)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private exchangeRateService: ExchangeRateService,
    private currencyCodeService: CurrencyCodeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currencyCodeSubscription = this.route.params.pipe(concatMap(params => {
      const id = params['id'];
      return this.currencyCodeService.getCurrencyCode(id);
    })
    ).subscribe(
      currCode => this.currencyCode = currCode,
      err => {
        this.currencyCodeError = err;
        return throwError(err);
      }
    );
  }

  addNewExchangeRate(): void {
    const exchangeRate: ExchangeRate = new ExchangeRate(
      this.exchangeRateAddForm.get('rateDate')!.value,
      this.exchangeRateAddForm.get('rate')!.value,
      this.currencyCode
    );
    this.exchangeRateAddSubscription = this.exchangeRateService
      .postExchangeRate(exchangeRate)
      .subscribe(
        () => {
          this.exchangeRateAddError = false;
          this.router.navigate(['/exchange-rate/currency-code', this.currencyCode.id]);
        },
        () => this.exchangeRateAddError = true
      );
  }

  get rateDate() { return this.exchangeRateAddForm.get('rateDate'); }

  get rate() { return this.exchangeRateAddForm.get('rate'); }

  ngOnDestroy() {
    this.currencyCodeSubscription.unsubscribe();
    if (this.exchangeRateAddSubscription != null) this.exchangeRateAddSubscription.unsubscribe();
  }  

}
