import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.less'],
})
export class Step1Component implements OnInit {
  public canProgress;
  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.canProgress = this.controlContainer.control.get('firstName').valid
  }
}
