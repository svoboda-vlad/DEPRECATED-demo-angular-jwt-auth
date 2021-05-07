import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCodeDetailComponent } from './currency-code-detail.component';

describe('CurrencyCodeDetailComponent', () => {
  let component: CurrencyCodeDetailComponent;
  let fixture: ComponentFixture<CurrencyCodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCodeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
