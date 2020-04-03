import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.less'],
  viewProviders: [ { provide: ControlContainer, useExisting: FormGroupDirective } ]
})
export class AddressFieldsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
