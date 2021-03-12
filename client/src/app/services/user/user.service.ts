import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { UserInterface } from './../../interfaces/user-interface';
import jwt_decode from 'jwt-decode';
import { ApiResponseInterface } from 'src/app/interfaces/api-response-interface';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _userApiService: UserApiService,
  ) { }

  public isLoggedIn: boolean = false;

  public user: UserInterface = {

    _id: undefined,
    username: undefined,
    fullName: undefined,
    isAdmin: false,
    city: undefined,
    street: undefined,
    orders: undefined

  }

  public loginUser = async (body: { username: string, password: string }) => {

    const response = await this._userApiService.loginUserToApi(body);

    if (response.err) return console.log(response.msg);
      // handleError() TODO
    
    const {
      _id,
      username,
      fullName,
      isAdmin,
      city,
      street,
      orders
    } = response;

    this.user = {
      _id,
      username,
      fullName,
      isAdmin,
      city,
      street,
      orders
    };

    this.isLoggedIn = true;

  };

  // - registerUser()
  // - validateRegisterForm()

}
