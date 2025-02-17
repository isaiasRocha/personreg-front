import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBaseService } from './base.model';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../network/enviroment.service';

@Injectable({
    providedIn: 'root',
})
export class BaseService<T> implements IBaseService<T> {
    constructor(
        private http: HttpClient,
        private environmentService: EnvironmentService,
    ) {}

    getAll(url: string, queryParams?: any, responseType?: 'json'): Observable<any> {
        const options = {
            responseType,
            params: {
                ...queryParams,
            },
        };
        const urlFormated = this.environmentService.getUrl(url);
        return this.http.get(urlFormated, options);
    }

    getOne(url: string, queryParams?: object): Observable<any> {
        const options = {
            params: {
                ...queryParams,
            },
        };
        const urlFormated = this.environmentService.getUrl(url);
        return this.http.get<T>(urlFormated, options);
    }

    getList(url: string, queryParams?: object): Observable<any> {
        const options = {
            params: {
                ...queryParams,
            },
        };
        const urlFormated = this.environmentService.getUrl(url);
        return this.http.get<T[]>(urlFormated, options);
    }

    post(url: string, payload: any, queryParams?: object): Observable<any> {
        const urlFormatted = this.environmentService.getUrl(url);

        if (queryParams) {
            const options = {
                params: {
                    ...queryParams,
                },
            };

            return this.http.post<T>(urlFormatted, payload, options);
        } else {
            return this.http.post<T>(urlFormatted, payload);
        }
    }

    put(url: string, payload: any): Observable<any> {
        const urlFormated = this.environmentService.getUrl(url);
        return this.http.put<T>(urlFormated, payload);
    }
}
