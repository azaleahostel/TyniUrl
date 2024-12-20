import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { RequestInterceptorService } from './dashboard/Interceptors/request-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    { 
      provide : HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi:true
    }]
};
