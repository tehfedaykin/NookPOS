import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { LoanService } from 'src/app/services/loan.service';
import { LoanType, RoofColors } from 'src/app/services/loan';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.less']
})
export class Step2Component implements OnInit {
  public parentForm;
  public loanTypes$: Observable<LoanType[]>;
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

  constructor(private loanService: LoanService, private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.parentForm = this.controlContainer.control;
    this.loanTypes$ = this.loanService.getLoanTypes();
  }

  public objectComparison(option, value): boolean {
    return option.type === value.type;
  }

}
