import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { UtilityService } from 'src/app/common/utility.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.less'],
})
export class Step1Component implements OnInit {
  public canProgress;
  constructor(public controlContainer: ControlContainer, private utilityService: UtilityService) {
  }

  ngOnInit() {
    const formGroup = this.controlContainer.control as FormGroup;
    const controls = ['firstName', 'lastName', 'streetNumber', 'islandName'];

    this.canProgress = this.utilityService.getValidityofControls(formGroup, controls);
  }
}
