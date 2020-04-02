import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './new-loan/step1/step1.component';
import { Step2Component } from './new-loan/step2/step2.component';
import { Step3Component } from './new-loan/step3/step3.component';
import { LoanSummaryComponent } from './new-loan/loan-summary/loan-summary.component';
import { OutstandingLoansComponent } from './outstanding-loans/outstanding-loans.component';
import { ApplicationCompleteComponent } from './new-loan/application-complete/application-complete.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'outstanding-loans', component: OutstandingLoansComponent},
  {
    path: 'new-loan',
    component: NewLoanComponent,
    children: [
      {
        path: 'step-1',
        component: Step1Component
      },
      {
        path: 'step-2',
        component: Step2Component
      },
      {
        path: 'step-3',
        component: Step3Component
      },
      {
        path: 'loan-summary',
        component: LoanSummaryComponent
      },
      {
        path: 'application-complete',
        component: ApplicationCompleteComponent
      }
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
