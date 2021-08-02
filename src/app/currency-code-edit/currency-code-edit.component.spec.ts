import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCodeEditComponent } from './currency-code-edit.component';

describe('CurrencyCodeEditComponent', () => {
  let component: CurrencyCodeEditComponent;
  let fixture: ComponentFixture<CurrencyCodeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCodeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCodeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
