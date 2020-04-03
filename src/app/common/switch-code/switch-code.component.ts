import { Component, forwardRef, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators, FormArray } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-switch-code',
  templateUrl: './switch-code.component.html',
  styleUrls: ['./switch-code.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchCodeComponent),
      multi: true
    }
  ]
})
export class SwitchCodeComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public _value: number;
  public codeGroup = new FormArray([
    new FormControl({value: '', disabled: false}, [Validators.required]),
    new FormControl({value: '', disabled: false}, [Validators.required]),
    new FormControl({value: '', disabled: false}, [Validators.required])
  ]);
  public isAlive = true;
  constructor() { }

  onChanged: any = () => {}
  onTouched: any = () => {}

  writeValue(val) {
    this._value = val;
    const code = val.split('-');
    if (code && code.length === 4) {
      for (let idx = 0; idx < code.length; idx++) {
        const formControl = this.codeGroup.controls[idx];
        const codeChunk = code[idx+1];
        if (formControl && codeChunk) {
          formControl.setValue(codeChunk);
        }
      }
    }
  }

  ngOnInit() {
    const switchFormControls = this.codeGroup.controls
    switchFormControls.map((formControl) => {
      formControl.valueChanges.pipe(
        takeWhile(() => this.isAlive)
      ).subscribe((val) => {
        if (val.length > 4) {
          formControl.setValue(val.substring(0, 4), {
            emitEvent: false
          });
        }
      })
    });

    this.codeGroup.valueChanges.pipe(
      takeWhile(() => this.isAlive)
    ).subscribe((val) => {
      const controlValues = Object.values(val)
      const friendCode = `SW-${controlValues[0]}-${controlValues[1]}-${controlValues[2]}`;
      this.onChanged(friendCode);
    })
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  registerOnChange(fn: any){
    this.onChanged = fn
  }
  registerOnTouched(fn: any){
    this.onTouched = fn
  }
}
