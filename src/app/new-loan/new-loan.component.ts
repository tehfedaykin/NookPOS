import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanService } from '../services/loan.service';
import { RoofColors, LoanType } from '../services/loan';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.less']
})
export class NewLoanComponent implements OnInit {
  public loanApplication: FormGroup;
  public loanTypes$;
  public roofColors: RoofColors[] = [
    RoofColors.Black,
    RoofColors.Blue,
    RoofColors.Green,
    RoofColors.Pink,
    RoofColors.Purple,
    RoofColors.Red,
    RoofColors.Teal,
    RoofColors.Yellow
  ];
  public sliderValue$: BehaviorSubject<number> = new BehaviorSubject(0);
  public remainingBalance$: Observable<number>;
  public loanType$: Observable<LoanType>;

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.loanTypes$ = this.loanService.getLoanTypes();

    this.loanApplication = new FormGroup({
      firstName: new FormControl({value: '', disabled: false}, Validators.required),
      lastName: new FormControl({value: '', disabled: false}, Validators.required),
      friendCode: new FormControl({value: '', disabled: false}),
      streetNumber: new FormControl({value: '', disabled: false}, Validators.required),
      islandName: new FormControl({value: '', disabled: false}, Validators.required),
      initialDeposit: new FormControl({value: 0, disabled: false}, Validators.required),
      loanType: new FormControl({value: '', disabled: false}, Validators.required),
      roofColor: new FormControl({value: '', disabled: false}, Validators.required),
    });

    this.loanType$ = this.loanApplication.get('loanType').valueChanges;

    this.remainingBalance$ = combineLatest(this.sliderValue$, this.loanType$).pipe(
      map(([sliderVal, loanTypeVal]) => {
        return loanTypeVal.loanAmount - sliderVal
      })
    )
  }

  public objectComparison(option, value): boolean {
    return option.type === value.type;
  }

}
