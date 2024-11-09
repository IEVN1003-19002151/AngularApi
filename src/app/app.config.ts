import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
=======
>>>>>>> ad582129bff2e2367557dac0232c1aef27417761

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]

  
};












=======
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
>>>>>>> ad582129bff2e2367557dac0232c1aef27417761
