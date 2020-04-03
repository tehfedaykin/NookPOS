import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OutstandingLoanQuery } from '../services/loanQuery.service';
import { map } from 'rxjs/operators';
import { OutstandingLoanModel } from '../models/OutstandingLoanModel';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';
import { DeleteLoanMutation } from '../services/loanDelete.service';
import { NotificationDialogComponent } from '../common/notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-outstanding-loans',
  templateUrl: './outstanding-loans.component.html',
  styleUrls: ['./outstanding-loans.component.less']
})
export class OutstandingLoansComponent implements OnInit {
  // graphql api
  public outstandingLoans$: Observable<
    OutstandingLoanModel[]
  > = this.loanService.watch().valueChanges.pipe(
    map(({ data }) => {
      return data.outstanding_loans;
    })
  );
  constructor(
    private readonly loanService: OutstandingLoanQuery,
    public dialog: MatDialog,
    private deleteLoanMutation: DeleteLoanMutation) {}

  ngOnInit() {
  }

  openConfirmationDialog(loanId) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {loan: loanId}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteLoan(result);
    });
  }

  deleteLoan(loanId) {
    this.deleteLoanMutation
      .mutate({
        id: loanId
      })
      .subscribe(
        ({
          data: {
            delete_outstanding_loans: {
              returning: { id, firstName, lastName }
            }
          }
        }) => {
          this.dialog.open(NotificationDialogComponent, {
            width: '250px',
            data: {message: `${firstName}'s Loan Deleted`}
          });

          this.loanService.fetch().pipe(
            map(({ data }) => {
              return data.outstanding_loans;
            })
          )
        }
      );
  }
}
