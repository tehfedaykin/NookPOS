import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './new-loan/step1/step1.component';
import { Step2Component } from './new-loan/step2/step2.component';
import { Step3Component } from './new-loan/step3/step3.component';
import { AddressFieldsComponent } from './common/address-fields/address-fields.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrettyPrintPipe } from './common/prettyprint.pipe';
import { LoanSummaryComponent } from './new-loan/loan-summary/loan-summary.component';
import { OutstandingLoansComponent } from './outstanding-loans/outstanding-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    NewLoanComponent,
    HomeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    AddressFieldsComponent,
    PrettyPrintPipe,
    LoanSummaryComponent,
    OutstandingLoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
