import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrencyCode, CurrencyCodeService } from '../currency-code/currency-code.service';

@Component({
  selector: 'daja-currency-code-detail',
  templateUrl: './currency-code-detail.component.html',
  styleUrls: ['./currency-code-detail.component.scss']
})
export class CurrencyCodeDetailComponent implements OnInit {

  currencyCode$: Observable<CurrencyCode> = null;
  error: Object = null;
  id: any;

  constructor(private currencyCodeService: CurrencyCodeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.currencyCode$ = this.currencyCodeService.getCurrencyCode(this.id).pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
    });
  }

}
