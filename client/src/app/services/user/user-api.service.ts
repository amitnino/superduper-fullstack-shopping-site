import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import jwt_decode from 'jwt-decode';
import { UserInterface } from 'src/app/interfaces/user/user-interface';

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
      lastOrder,
      numberOfOrders
    }: any = jwt_decode(token);

    const user = {
      _id,
      username,
      fullName,
      isAdmin,
      city,
      street,
      lastOrder,
      numberOfOrders
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

  public placeOrderToApi = async (body: Object): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.post('orders/new', body));

  }
};
