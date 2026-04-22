import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SbbFormFieldModule} from '@sbb-esta/lyne-angular/form-field';
import {CustomControlComponentSelect} from './custom/custom-form-select';
import {CustomControlComponentTextarea} from './custom/custom-form-textarea';
import {CustomControlComponentInput} from './custom/custom-form-input';
import {SbbDialogService} from '@sbb-esta/lyne-angular/dialog';
import {CustomDialog} from './dialog/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    SbbFormFieldModule,
    ReactiveFormsModule,
    CustomControlComponentInput,
    CustomControlComponentSelect,
    CustomControlComponentTextarea,
  ],
  styleUrl: './app.scss'
})
export class App {

  private readonly sbbDialog = inject(SbbDialogService);

  openDialog() {
    this.sbbDialog.open(CustomDialog);
  }
}
