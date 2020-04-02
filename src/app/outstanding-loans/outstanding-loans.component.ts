import { Component, OnInit, Inject } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Observable } from 'rxjs';
import { Loan } from '../services/loan';
import { OutstandingLoanQuery } from '../services/loanQuery.service';
import { map } from 'rxjs/operators';
import { OutstandingLoanModel } from '../models/OutstandingLoanModel';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-outstanding-loans',
  templateUrl: './outstanding-loans.component.html',
  styleUrls: ['./outstanding-loans.component.less']
})
export class OutstandingLoansComponent implements OnInit {
  // public outstandingLoans$: Observable<Loan[]> = this.loanService.getOutstandingLoans();
  // constructor(private loanService: LoanService) { }

  // graphql api
  public outstandingLoans$: Observable<
    OutstandingLoanModel[]
  > = this.loanService.watch().valueChanges.pipe(
    map(({ data }) => {
      // console.log('data', data);
      return data.outstanding_loans;
    })
  );
  constructor(private readonly loanService: OutstandingLoanQuery, public dialog: MatDialog) {}

  ngOnInit() {}

  openConfirmationDialog(loanId) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {loan: loanId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //this.deleteLoan(result);
    });
  }

  deleteLoan(loadId) {

  }
}
