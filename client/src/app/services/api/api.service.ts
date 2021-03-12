import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,

  ) { };

  public apiUrl: string = 'http://localhost:1000/';

  public httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authoriztion': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    }),

  };

  public get = (url: string, params: string | null): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url + params ? '/' + params : '';

    return this.http.get(requestUrl, this.httpOptions);

  };

  public post = (url: string, body: object ): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url;
    
    return this.http.post(requestUrl,body, this.httpOptions);

  };

  public put = (url: string, body?: object, params?: string ): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url + params ? '/' + params : '';

    return this.http.put(requestUrl,body, this.httpOptions);

  };

  public delete = (url: string, params: string ): Observable<Object> => {

    const requestUrl: string = this.apiUrl + url + params ? '/' + params : '';

    return this.http.delete(requestUrl, this.httpOptions);

  };

};