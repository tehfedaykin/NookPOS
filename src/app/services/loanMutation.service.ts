import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { OutstandingLoanModel } from '../models/OutstandingLoanModel';

interface CreateLoanResponse {
  insert_outstanding_loans: { returning: { id: number }[] };
}

interface CreateLoanVariables {
  loan: OutstandingLoanModel;
}

@Injectable()
export class CreateLoanMutation extends Mutation<
  CreateLoanResponse,
  CreateLoanVariables
> {
  document = gql`
    mutation MyMutation($loan: outstanding_loans_insert_input!) {
      insert_outstanding_loans(objects: [$loan]) {
        returning {
          id
        }
      }
    }
  `;
}
