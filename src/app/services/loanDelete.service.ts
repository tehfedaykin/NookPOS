import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { OutstandingLoanModel } from '../models/OutstandingLoanModel';

interface DeleteLoanResponse {
  delete_outstanding_loans: { returning: { id: number, firstName: string, lastName: string } };
}

interface DeleteLoanVariables {
  id: number;
}

@Injectable()
export class DeleteLoanMutation extends Mutation<
  DeleteLoanResponse,
  DeleteLoanVariables
> {
  document = gql`
    mutation DeleteLoan($id: Int!) {
      delete_outstanding_loans(where: {id: {_eq: $id}}) {
        returning {
          id
          firstName
          lastName
        }
      }
    }
  `;
}
