export enum RoofColors {
  Blue = 'blue',
  Red = 'red',
  Pink = 'pink',
  Yellow = 'yellow',
  Green = 'green',
  Teal = 'teal',
  Purple = 'purple',
  Black = 'black'
}

export enum CurrencyTypes {
  NookMiles = 'Nook Miles',
  Bells = 'Bells'
}

export interface Loan {
  firstName: string,
  lastName: string,
  streetNumber: number,
  islandName: string,
  initialDeposit: number,
  remainingBalance: number;
  loanType: LoanType,
  roofColor: string
}

export interface LoanType {
  type: string,
  loanAmount: number,
  loanCurrency: CurrencyTypes,
}
