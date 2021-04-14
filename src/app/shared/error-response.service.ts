import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorResponseService {

  private errorMessage: String = null;

  constructor() { }

  handleError(res: HttpErrorResponse): Observable<never> {
    if (res.status != 0) {
      this.errorMessage = 'Error response: ' + res.status + (res.error ? ' ' + res.error.error : '');
    }
    else {
      this.errorMessage = 'Server not available';
    }
    return throwError(this.errorMessage);
  }

}
