import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateCurrencyCodeComponent } from './exchange-rate-currency-code.component';

describe('ExchangeRateCurrencyCodeComponent', () => {
  let component: ExchangeRateCurrencyCodeComponent;
  let fixture: ComponentFixture<ExchangeRateCurrencyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateCurrencyCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateCurrencyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
