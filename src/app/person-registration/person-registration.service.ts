import { Injectable } from '@angular/core';
import { PersonInput } from './model/person-input';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BaseService } from './service/base-service';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonRegistrationService extends BaseService {

  constructor(
    private http: HttpClient
  ) { super() }

  save(person : PersonInput) : Observable<any> {
    return this.http.post(this.UrlService, person)
    .pipe(
        map(super.extractData),
        catchError(this.serviceError));
}

}
