import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ApiResponseInterface } from 'src/app/interfaces/api-response-interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(
    private _api: ApiService,

  ) { }

  private url = 'carts/'

  public createNewCartToApi = (): Promise<any> => {

    return new Promise((resolve) => {

      this._api.get( this.url + 'new' ).subscribe(

        (response: ApiResponseInterface) => {

          resolve(response);

        },

        (error: HttpErrorResponse) => {

          resolve(error.error);

        }
      );
    });
  };

  public getOpenCartByUserIdFromApi = (): Promise<any> => {

    return new Promise((resolve) => {

      this._api.get( this.url + 'open' ).subscribe(

        (response: ApiResponseInterface) => {

          resolve(response);

        },

        (error: HttpErrorResponse) => {

          resolve(error.error);

        }
      );
    });
  };
};
