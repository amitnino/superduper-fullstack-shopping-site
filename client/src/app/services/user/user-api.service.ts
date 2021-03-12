import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import jwt_decode from 'jwt-decode';
import { ApiResponseInterface } from 'src/app/interfaces/api-response-interface';
import { UserInterface } from 'src/app/interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private _api: ApiService,

  ) { }

  public loginUserToApi = async (body: { username: string, password: string }): Promise<any> => {

    return new Promise((resolve) => {

      this._api.post('auth/login', body).subscribe(

        async (response: ApiResponseInterface) => {

          // TODO create error handler
          if (response.err){ 
            console.log(response.msg);
            resolve(response);
          };

          localStorage.setItem('token', JSON.stringify(response.loginToken));

          resolve(jwt_decode(response.loginToken));

        }
      );
    })
  };

  public validateRegisterFormToApi = (body: {matchIsraeliId: string, matchUsername: string}): Observable<any> => {

    return this._api.post( this.url + 'register/validateUser', body );

  };

}
