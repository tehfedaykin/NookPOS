export interface OutstandingLoanModel {
  id: number;
  firstName: string;
  lastName: string;
  streetNumber: number;
  islandName: string;
  initialDeposit: number;
  remainingBalance: number;
  type: string;
  roofColor: string;
  balanceDue: number;
  loanCurrency: string;
  friendCode?: string;
}
