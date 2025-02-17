import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonInput } from './model/person-input';
import { catchError, map } from 'rxjs/operators';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PersonRegistrationService {

  private readonly apiUrl = environment.apiUrl;  // URL dinâmica

  constructor(private http: HttpClient) { }

  save(person: PersonInput): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, person, { headers })
      .pipe(
        map(response => response),
        catchError(error => {
          console.error('Erro na requisição:', error);
          throw error;
        })
      );
  }
}
