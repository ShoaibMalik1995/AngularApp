import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthEndPoints, ApiMethod } from '../../consts';
import { ErrorService } from '../error/error.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  methods: ApiMethod;

  constructor(private http: HttpClient, private _error: ErrorService) {

  }

  /**
   * this service is used to make api calls, you will only have to call this function and will have
   * method name, api url and the data if you wanna do put or post calls
   * @param method
   * @param api
   * @param data
  */
  requestCall(api: AuthEndPoints, method: ApiMethod, data?: any) {
    let response;

    switch(method){
      case ApiMethod.GET:
        if(data == null) {
        response = this.http.get(`${environment.apiUrl}${api}`)
          .pipe(catchError(err => this.handleError(err,this)));
        }
        else {
          response = this.http.get(`${environment.apiUrl}${api}${data}`)
          .pipe(catchError(err => this.handleError(err,this)));
        }
        break;
      case ApiMethod.POST:
        response = this.http.post(`${environment.apiUrl}${api}`, data)
          .pipe(catchError(err => this.handleError(err,this)));
        break;
      case ApiMethod.PUT:
        response = this.http.put(`${environment.apiUrl}${api}`,data)
          .pipe(catchError(err => this.handleError(err,this)));
        break;
      case ApiMethod.DELETE:
        response = this.http.delete(`${environment.apiUrl}${api}`)
          .pipe(catchError(err => this.handleError(err,this)));
        break;
      default:
        break;
    }

    return response;
  }

  /**
   * this function is used to handle the error that we get weh we call any api
   * @param error
   */
  handleError(error: HttpErrorResponse, self) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    }
    else {
      // console.error('An error occurred: ', error.error.message);
      this._error.whichError(error.status, error.message);
      return throwError({error: error.message, status: error.status });
    }
  }

}
