import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      firstName: new FormControl({value: '', disabled: false}, Validators.required),
      lastName: new FormControl({value: '', disabled: false}, Validators.required),
      streetNumber: new FormControl({value: '', disabled: false}, Validators.required),
      islandName: new FormControl({value: '', disabled: false}, Validators.required),
      initialDeposit: new FormControl({value: 0, disabled: false}, Validators.required),
      loanType: new FormControl({value: '', disabled: false}, Validators.required),
      roofColor: new FormControl({value: '', disabled: false}, Validators.required)
    });
  }

}
