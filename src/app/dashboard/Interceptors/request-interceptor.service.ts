import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
 
)
export class RequestInterceptorService implements HttpInterceptor {

  constructor() { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor ejecutándose', request.url); 
    const token = '3vBkgC8bxEhQ0hFSTB1kYVuJ1NJn5XMDO4NW0SYrpVe7VXH2cnZEYeUB39H2';
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('desde el interceptor')
    return next.handle( request );
  }

  
}
