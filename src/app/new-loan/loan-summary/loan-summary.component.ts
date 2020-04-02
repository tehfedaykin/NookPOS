import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { CreateLoanMutation } from 'src/app/services/loanMutation.service';

@Component({
  selector: 'app-loan-summary',
  templateUrl: './loan-summary.component.html',
  styleUrls: ['./loan-summary.component.less']
})
export class LoanSummaryComponent implements OnInit {
  public loanSummary;
  constructor(
    private controlContainer: ControlContainer,
    private readonly createLoanMutation: CreateLoanMutation
  ) {}

  ngOnInit() {
    const formValue = this.controlContainer.control.value;
    const loanDetails = {
      ...formValue,
      remainingBalance: formValue.loanType.loanAmount - formValue.initialDeposit
    };

    const { loanType, ...details } = loanDetails;

    // TODO: might want to move this to a button submit
    // I don't know how to do that though
    this.createLoanMutation
      .mutate({
        loan: {
          ...details,
          ...loanType
        }
      })
      .subscribe(
        ({
          data: {
            insert_outstanding_loans: {
              returning: [{ id }]
            }
          }
        }) => {
          this.loanSummary = { id, ...loanDetails };
        }
      );
  }
}
