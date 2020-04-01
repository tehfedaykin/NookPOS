import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import {
  map,
  switchMap,
  tap,
  withLatestFrom,
  startWith
} from 'rxjs/operators';
import { LoanType } from 'src/app/services/loan';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.less'],
  viewProviders: [ { provide: ControlContainer, useExisting: FormGroupDirective } ]
})
export class Step3Component implements OnInit {
  public sliderValue$: BehaviorSubject<number> = new BehaviorSubject(0);
  public remainingBalance$: Observable<number>;
  public loanType$: Observable<LoanType>;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
    this.loanType$ = this.controlContainer.control.get('loanType').valueChanges.pipe(
      startWith(this.controlContainer.control.get('loanType').value)
    )

    this.remainingBalance$ = combineLatest(this.sliderValue$, this.loanType$).pipe(
      map(([sliderVal, loanTypeVal]) => {
        return loanTypeVal.loanAmount - sliderVal
      })
    )
  }

}
