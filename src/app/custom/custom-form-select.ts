import { Component, ElementRef, forwardRef, Input, OnChanges, SimpleChanges, viewChild  } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SbbFormFieldControl } from "@sbb-esta/lyne-angular/form-field";
import {Subject} from 'rxjs';

@Component({
  selector: 'sbb-custom-control-select',
  template: `
    <div>
      <select id="select">
        <option value="bern">Bern</option>
        <option value="zurich">Zürich</option>
        <option value="basel">Basel</option>
        <option value="geneva">Geneva</option>
        <option value="lausanne">Lausanne</option>
      </select>
    </div>`,
  host: {
    '[id]': 'id',
  },
  styles: ':host {width: 100%;}',
  providers: [
    { provide: SbbFormFieldControl, useExisting: forwardRef(() => CustomControlComponentSelect) },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomControlComponentSelect),
    },
  ],
})
export class CustomControlComponentSelect implements SbbFormFieldControl, ControlValueAccessor, OnChanges {
  input = viewChild<ElementRef<HTMLInputElement>>('select');
  stateChanges = new Subject<void>();
  @Input() id: string = 'custom-control';
  empty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readOnly: boolean = false;

  onChange: (value: any) => void = () => undefined;
  onTouched: () => void = () => undefined;

  onContainerClick(_event: MouseEvent): void {
    this.input()?.nativeElement.focus();
  }

  onInput() {
    const value = this.input()?.nativeElement.value ?? '';
    this.onChange(value);
    const empty = value.length === 0;
    if (this.empty !== empty) {
      this.empty = empty;
      this.stateChanges.next();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stateChanges.next();
  }

  writeValue(value: any): void {
    const input = this.input();
    if (input) {
      input.nativeElement.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    const input = this.input();
    if (input) {
      input.nativeElement.disabled = isDisabled;
    }
  }
}
