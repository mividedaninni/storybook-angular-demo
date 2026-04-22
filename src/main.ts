import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter([], withHashLocation()),
  ],
});
