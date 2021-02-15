import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRestrictedComponent } from './hello-restricted.component';

describe('HelloRestrictedComponent', () => {
  let component: HelloRestrictedComponent;
  let fixture: ComponentFixture<HelloRestrictedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloRestrictedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
