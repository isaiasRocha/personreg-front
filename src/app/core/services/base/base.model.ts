import { Observable } from 'rxjs';

export interface IBaseService<T> {
    getAll(url: string, options?: any): Observable<any>;
    getOne(url: string): Observable<any>;
    post(url: string, payload: any): Observable<any>;
    put(url: string, payload: any): Observable<any>;
}
