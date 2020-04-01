import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.less']
})
export class NewLoanComponent implements OnInit {
  public loanApplication: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loanApplication = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      streetNumber: new FormControl(''),
      islandName: new FormControl(''),
      initialDeposit: new FormControl(''),
      loanType: new FormControl(''),
      roofColor: new FormControl('')
    })
  }

}
