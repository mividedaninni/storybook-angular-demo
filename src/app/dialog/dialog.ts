import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SbbFormFieldModule} from '@sbb-esta/lyne-angular/form-field';
import {SbbSelectModule} from '@sbb-esta/lyne-angular/select';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SbbDialogContent, SbbDialogTitle} from '@sbb-esta/lyne-angular/dialog';

/**
 * @title Basic select
 */
@Component({
  selector: 'custom-dialog',
  templateUrl: 'dialog.html',
  imports: [SbbSelectModule, SbbFormFieldModule, ReactiveFormsModule, SbbDialogTitle, SbbDialogContent],
})
export class CustomDialog implements OnInit {
  formControl = new FormControl<null | string>(null);

  ngOnInit() {
    this.formControl.setValue('Astoro');
  }
}
