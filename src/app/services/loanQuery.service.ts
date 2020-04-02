import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { OutstandingLoanModel } from '../models/OutstandingLoanModel';

interface OutstandingLoanResponse {
  outstanding_loans: OutstandingLoanModel[];
}

@Injectable()
export class OutstandingLoanQuery extends Query<OutstandingLoanResponse> {
  document = gql`
    query GetOutstandingLoans {
      outstanding_loans {
        id
        firstName
        initialDeposit
        islandName
        lastName
        type
        remainingBalance
        roofColor
        streetNumber
        friendCode
      }
    }
  `;
}
