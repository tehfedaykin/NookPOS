import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

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
import { SwitchCodeComponent } from './common/switch-code/switch-code.component';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import { ApolloClient } from 'apollo-client';
import { OutstandingLoanQuery } from './services/loanQuery.service';
import { CreateLoanMutation } from './services/loanMutation.service';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { DeleteLoanMutation } from './services/loanDelete.service';
import { ApplicationCompleteComponent } from './new-loan/application-complete/application-complete.component';
import { NotificationDialogComponent } from './common/notification-dialog/notification-dialog.component';

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
    OutstandingLoansComponent,
    SwitchCodeComponent,
    ConfirmDialogComponent,
    ApplicationCompleteComponent,
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: httpLink => {
        return new ApolloClient({
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://tom-nook-pos.herokuapp.com/v1/graphql'
            // headers: {
            //   'x-hasura-admin-secret': `tomnookisacrook`
            // }
          })
        });
      },
      deps: [HttpLink]
    },
    OutstandingLoanQuery,
    CreateLoanMutation,
    DeleteLoanMutation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
