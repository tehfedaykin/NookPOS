import { Component, OnInit } from '@angular/core';
import {
  ControlContainer
} from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LoanType } from 'src/app/services/loan';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.less'],
})
export class Step3Component implements OnInit {
  public sliderValue: BehaviorSubject<number> = new BehaviorSubject(0);
  public remainingBalance$: Observable<number>;
  public loanType$: Observable<LoanType>;
  public formGroup;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formGroup = this.controlContainer.control;
    const loanControl = this.controlContainer.control.get('loanType')
    this.loanType$ = loanControl.valueChanges.pipe(
      startWith(loanControl.value)
    );

    this.remainingBalance$ = combineLatest([
      this.sliderValue,
      this.loanType$
    ]).pipe(
      map(([sliderVal, loanTypeVal]) => loanTypeVal.loanAmount - sliderVal)
    );
  }
}
