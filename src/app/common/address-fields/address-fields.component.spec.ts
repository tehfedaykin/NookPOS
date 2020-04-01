import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFieldsComponent } from './address-fields.component';

describe('AddressFieldsComponent', () => {
  let component: AddressFieldsComponent;
  let fixture: ComponentFixture<AddressFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
