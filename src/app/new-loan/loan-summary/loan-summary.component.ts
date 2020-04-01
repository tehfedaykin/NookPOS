import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.less']
})
export class LoanSummaryComponent implements OnInit {
  public loanSummary;
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    const formValue = this.controlContainer.control.value;
    this.loanSummary = {
      ...formValue,
      balanceDue: formValue.loanType.loanAmount - formValue.initialDeposit
    }
    console.log('loan summary', this.loanSummary, formValue);
  }

}
