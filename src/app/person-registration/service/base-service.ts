import { HttpErrorResponse } from "@angular/common/http"
import { throwError } from "rxjs";

export abstract class BaseService {
    protected UrlService: string= `http://localhost:8080/v1`

    protected extractData(response : any) {
        return response || {};
    }

    protected serviceError(response: Response | any) {
        let customerError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === "Unknown Error") {
                customerError.push("Ocorreu um erro desconhecido.");
                response.error.errors = customerError;
            }
        }
        return throwError(response);
    }
}
