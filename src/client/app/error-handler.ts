import { ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/browser';

import { environment } from '../environments/environment';

export class AppErrorHandler implements ErrorHandler {
  handleError(err: any) {
    console.error(err); // log the error to the console
    if (environment.sentry.enabled) {
      Sentry.captureException(err);
    }
  }
}
