import {Component} from '@angular/core';
import {SbbSignet} from '@sbb-esta/lyne-angular/signet';
import {
  SbbTimetableForm,
  SbbTimetableFormDetails,
  SbbTimetableFormField,
  SbbTimetableFormSwapButton
} from '@sbb-esta/lyne-angular/timetable-form';
import {SbbAutocomplete} from '@sbb-esta/lyne-angular/autocomplete';
import {SbbFormField} from '@sbb-esta/lyne-angular/form-field';
import {SbbDateInput} from '@sbb-esta/lyne-angular/date-input';
import {
  SbbDatepicker,
  SbbDatepickerNextDay,
  SbbDatepickerPreviousDay,
  SbbDatepickerToggle
} from '@sbb-esta/lyne-angular/datepicker';
import {SbbDivider} from '@sbb-esta/lyne-angular/divider';
import {SbbTimeInput} from '@sbb-esta/lyne-angular/time-input';
import {SbbToggle, SbbToggleOption} from '@sbb-esta/lyne-angular/toggle';
import {SbbButton} from '@sbb-esta/lyne-angular/button';
import {SbbTeaser} from '@sbb-esta/lyne-angular/teaser';
import {SbbTitle} from '@sbb-esta/lyne-angular/title';
import {SbbOption} from '@sbb-esta/lyne-angular/option';

@Component({
  selector: 'app-root',
  imports: [SbbSignet, SbbTimetableForm, SbbTimetableFormField, SbbAutocomplete, SbbTimetableFormSwapButton, SbbTimetableFormDetails, SbbFormField, SbbDateInput, SbbDatepickerPreviousDay, SbbDatepickerNextDay, SbbDatepickerToggle, SbbDatepicker, SbbDivider, SbbTimeInput, SbbToggle, SbbToggleOption, SbbButton, SbbTeaser, SbbTitle, SbbOption],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'storybook-demo';
}
