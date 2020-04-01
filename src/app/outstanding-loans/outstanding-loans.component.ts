import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Observable } from 'rxjs';
import { Loan } from '../services/loan';

@Component({
  selector: 'app-outstanding-loans',
  templateUrl: './outstanding-loans.component.html',
  styleUrls: ['./outstanding-loans.component.less']
})
export class OutstandingLoansComponent implements OnInit {
  public outstandingLoans$: Observable<Loan[]> = this.loanService.getOutstandingLoans();
  constructor(private loanService: LoanService) { }

  ngOnInit() {
  }

}
