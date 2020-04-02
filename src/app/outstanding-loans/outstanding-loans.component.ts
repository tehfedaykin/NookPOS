import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Observable } from 'rxjs';
import { Loan } from '../services/loan';
import { OutstandingLoanQuery } from '../services/loanQuery.service';
import { map } from 'rxjs/operators';
import { OutstandingLoanModel } from '../models/OutstandingLoanModel';

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
      return data.outstanding_loans.map(item => ({
        ...item
      }));
    })
  );
  constructor(private readonly loanService: OutstandingLoanQuery) {}

  ngOnInit() {}
}
