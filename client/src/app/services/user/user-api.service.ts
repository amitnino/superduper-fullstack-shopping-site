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

    return new Promise((resolve) => {

      this._api.post(this.url + 'login', body).subscribe(

        async (response: ApiResponseInterface) => {

          // TODO create error handler
          if (response.err) {
            resolve(response);
          };

          localStorage.setItem('token', JSON.stringify(response.loginToken));

          resolve(this.getUserFromToken(response.loginToken));

        },

        async (error: HttpErrorResponse) => {

          resolve(error.error);

        }

      );
    });
  };

  public validateRegisterFormToApi = (body: { israeliId: string, username: string }): Promise<any> => {

    return new Promise((resolve) => {

      this._api.post(this.url + 'register/validateUser', body).subscribe(

        async (response: ApiResponseInterface) => {

          resolve(response);

        },

        async (error: HttpErrorResponse) => {
          
          resolve(error.error);
          
        }

        )
        
        
      });
      
    };
    
    public registerUserToApi = (body: Object): Promise<any> => {
      
      return new Promise ((resolve)=>{
        
        this._api.post(this.url + 'register', body).subscribe(
          
          async (response: ApiResponseInterface) =>{

            resolve(response);

          },
          
          async (error: HttpErrorResponse) => {
      
            resolve(error.error);
      
          }
      );

    });

  };

};
