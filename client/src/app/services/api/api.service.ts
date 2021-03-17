import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiResponseInterface } from "src/app/interfaces/api/api-response-interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,

  ) { };

  public apiUrl: string = 'http://localhost:1000/';

  public getHttpOptions = (): any => {   
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token') ? localStorage.getItem('token') : ''
      })
    };
  }

  public get = (url: String): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url;

    return this.http.get(requestUrl, this.getHttpOptions());

  };

  public post = (url: string, body: object): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url;

    return this.http.post(requestUrl, body, this.getHttpOptions());

  };

  public put = (url: string, body?: object): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url;

    return this.http.put(requestUrl, body, this.getHttpOptions());

  };

  public delete = (url: string): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url;

    return this.http.delete(requestUrl, this.getHttpOptions());

  };

  public defaultApiResponseHandler = (apiResponse: Observable<Object>): Promise<any> => {

    return new Promise((resolve, reject) => {

      apiResponse.subscribe(

        (response: ApiResponseInterface) => {
          
          resolve(response);

        },

        (error: HttpErrorResponse) => {

          const response: ApiResponseInterface = {...error.error, status: error.status};

          reject(response);

        }
      );
    });
  };

};