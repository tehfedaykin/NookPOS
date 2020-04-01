import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CurrencyTypes, Loan, LoanType } from './loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  public getOutstandingLoans() {
    return of([
      {
        id: 1,
        firstName: 'Jennifer',
        lastName: 'Wadella',
        streetNumber: 404,
        islandName: 'coronavill',
        initialDeposit: 3000,
        remainingBalance: 95000,
        loanType: 'First Home',
        roofColor: 'teal'
      },
      {
        id: 2,
        firstName: 'Sandi',
        lastName: 'Barr',
        streetNumber: 466,
        islandName: 'Wholesome',
        initialDeposit: 10000,
        remainingBalance: 188000,
        loanType: 'The Second Home Upgrade',
        roofColor: 'black'
      },
      {
        id: 2,
        firstName: 'Matt',
        lastName: 'Warger',
        streetNumber: 466,
        islandName: 'Spacecamp',
        initialDeposit: 10000,
        remainingBalance: 338000,
        loanType: 'Back Room Upgrade',
        roofColor: 'red'
      },
      {
        id: 3,
        firstName: 'Chloe',
        lastName: 'Condon',
        streetNumber: 466,
        islandName: 'Baller',
        initialDeposit: 10000,
        remainingBalance: 188000,
        loanType: 'The Second Home Upgrade',
        roofColor: 'pink'
      },
      {
        id: 3,
        firstName: 'Jan-Niklas',
        lastName: 'Wortmann',
        streetNumber: 202,
        islandName: 'madagascar',
        initialDeposit: 12000,
        remainingBalance: 186000,
        loanType: 'The Second Home Upgrade',
        roofColor: 'blue'
      }
    ])
  }

  public getLoanTypes(): Observable<LoanType[]> {
    return of([
      {
        type: 'Tent',
        loanAmount: 5000,
        loanCurrency: CurrencyTypes.NookMiles
      },
      {
        type: 'The First Home',
        loanAmount: 98000,
        loanCurrency: CurrencyTypes.Bells
      },
      {
        type: 'The Second Home Upgrade',
        loanAmount: 198000,
        loanCurrency: CurrencyTypes.Bells
      },
      {
        type: 'Back Room Upgrade',
        loanAmount: 348000,
        loanCurrency: CurrencyTypes.Bells
      },
      {
        type: 'Left Room Upgrade',
        loanAmount: 548000,
        loanCurrency: CurrencyTypes.Bells
      },
      {
        type: 'Right Room Upgrade',
        loanAmount: 748000,
        loanCurrency: CurrencyTypes.Bells
      },
      {
        type: 'Second Floor Upgrade',
        loanAmount: 1248000,
        loanCurrency: CurrencyTypes.Bells
      },
      {
        type: 'Basement Upgrade',
        loanAmount: 2498000,
        loanCurrency: CurrencyTypes.Bells
      }
    ])
  }

}
