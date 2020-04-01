import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCodeComponent } from './switch-code.component';

describe('SwitchCodeComponent', () => {
  let component: SwitchCodeComponent;
  let fixture: ComponentFixture<SwitchCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
