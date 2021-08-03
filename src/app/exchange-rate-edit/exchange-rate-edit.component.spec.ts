import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateEditComponent } from './exchange-rate-edit.component';

describe('ExchangeRateEditComponent', () => {
  let component: ExchangeRateEditComponent;
  let fixture: ComponentFixture<ExchangeRateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
