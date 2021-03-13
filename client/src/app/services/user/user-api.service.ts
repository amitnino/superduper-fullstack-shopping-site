import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import jwt_decode from 'jwt-decode';
import { ApiResponseInterface } from 'src/app/interfaces/api-response-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { UserInterface } from 'src/app/interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private _api: ApiService,

  ) { };

  private url = 'auth/';

  public getUserFromToken = (token: string): UserInterface => {

    const {
      _id,
      username,
      fullName,
      isAdmin,
      city,
      street,
      orders
    }: any = jwt_decode(token);

    const user = {
      _id,
      username,
      fullName,
      isAdmin,
      city,
      street,
      orders
    };

    return user;

  }

  public loginUserToApi = async (body: { username: string, password: string }): Promise<any> => {

    const response = await this._api.defaultApiResponseHandler(this._api.post(this.url + 'login', body))

    localStorage.setItem('token', response.loginToken);

    return response;

  };

  public validateRegisterFormToApi = async (body: { israeliId: string, username: string }): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.post(this.url + 'register/validateUser', body));

  };

  public registerUserToApi = async (body: Object): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.post(this.url + 'register', body));
    
  };
};
