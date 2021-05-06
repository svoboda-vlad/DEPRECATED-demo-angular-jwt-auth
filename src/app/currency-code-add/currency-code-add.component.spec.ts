import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCodeAddComponent } from './currency-code-add.component';

describe('CurrencyCodeAddComponent', () => {
  let component: CurrencyCodeAddComponent;
  let fixture: ComponentFixture<CurrencyCodeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCodeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
