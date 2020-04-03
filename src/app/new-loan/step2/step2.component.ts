import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { LoanService } from 'src/app/services/loan.service';
import { LoanType, RoofColors } from 'src/app/services/loan';
import { Observable } from 'rxjs';
import { UtilityService } from 'src/app/common/utility.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.less']
})
export class Step2Component implements OnInit {
  public formGroup;
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
  public canProgress;

  constructor(
    private loanService: LoanService,
    private controlContainer: ControlContainer,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
    this.loanTypes$ = this.loanService.getLoanTypes();

    const controls = ['loanType', 'roofColor'];

    this.canProgress = this.utilityService.getValidityofControls(this.formGroup, controls);
  }

  public objectComparison(option, value): boolean {
    return option.type === value.type;
  }

}
