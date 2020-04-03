import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getValidityofControls(formGroup: FormGroup, controlNames: string[]) {
    const controlStatuses = controlNames.map((controlName) => {
      return formGroup.get(controlName).statusChanges.pipe(
        startWith(formGroup.get(controlName).status)
      )
    });
    return combineLatest(controlStatuses).pipe(
      map((validityStatuses) => {
        return validityStatuses.filter(status => status === 'INVALID').length === 0 ;
      })
    )
  }
}
