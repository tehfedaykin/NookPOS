import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingLoansComponent } from './outstanding-loans.component';

describe('OutstandingLoansComponent', () => {
  let component: OutstandingLoansComponent;
  let fixture: ComponentFixture<OutstandingLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstandingLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
