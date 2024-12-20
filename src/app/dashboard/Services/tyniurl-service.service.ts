import { Observable, catchError, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tinyurl } from '../Models/Interfaces/tinyurl';

@Injectable({
  providedIn: 'root'
})
export class TyniurlServiceService {

  constructor(private http:HttpClient) { }
  
  getDecodedUrl( domain: string, alias: string ):Observable<Tinyurl>{
    return this.http.get<Tinyurl>(`https://api.tinyurl.com/alias/${domain}/${alias}`,);
  }
  
  createNewTinyUrl(data:any):Observable<Tinyurl> {
    console.log('Servicio: iniciando petición');
    return this.http.post<Tinyurl>(`https://api.tinyurl.com/create`, data).pipe(
      tap(response => console.log('Servicio: respuesta recibida', response)),
      catchError(error => {
        console.error('Servicio: error en la petición', error);
        throw error;
      })
    );
  }
}
