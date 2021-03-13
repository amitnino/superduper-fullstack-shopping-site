import { Injectable, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';
import { UserInterface } from './../../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(
    private _userApiService: UserApiService,
  ) { }

  public isLoggedIn: boolean = false;
  public user: UserInterface;
  public initialUser: UserInterface = {

    _id: undefined,
    username: undefined,
    fullName: undefined,
    isAdmin: false,
    city: undefined,
    street: undefined,
    orders: undefined

  }
  

  ngOnInit(): void {
  }

  public logout = (): void =>  {
    
    this.user = this.initialUser;
    this.isLoggedIn = false;
    localStorage.removeItem('token');

  };

  public getUserFromLocalStorage = ():void => {

    if (!localStorage.getItem('token')) {

      this.logout();

    };
    
    this.user = this._userApiService.getUserFromToken(localStorage.getItem('token'));
    this.isLoggedIn = true;

  };

  public loginUser = async (body: { username: string, password: string }) => {

    const response = await this._userApiService.loginUserToApi(body);


    if (response.err) return console.log(response.msg);
    // handleError() TODO

    this.user = response;

    this.isLoggedIn = true;

  };

  public validateRegisterForm = async (body: {israeliId: string, username: string}) => {

    return await this._userApiService.validateRegisterFormToApi(body);

  };

  public registerUser = async (body: {
    israeliId: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    city: string,
    street: string
  }): Promise<any> => {

    return await this._userApiService.registerUserToApi(body)

  }

}
