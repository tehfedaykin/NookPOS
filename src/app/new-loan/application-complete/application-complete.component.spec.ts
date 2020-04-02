import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCompleteComponent } from './application-complete.component';

describe('ApplicationCompleteComponent', () => {
  let component: ApplicationCompleteComponent;
  let fixture: ComponentFixture<ApplicationCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
