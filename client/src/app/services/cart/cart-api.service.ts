import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(
    private _api: ApiService,

  ) { };

  private url = 'carts/';

  public createNewCartToApi = async (): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.url + 'new'))

  };

  public getOpenCartByUserIdFromApi = async (): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.url + 'open'));

  };

  public addItemToCartToApi = async (body: any): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.post(this.url + 'add', body));

  };

  public editItemAmountToApi = async (body: any): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.put(this.url + 'amount', body));

  };

  public removeItemFromCartToApi = async (cartItemId: string): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.delete(this.url + 'remove/' + cartItemId))

  };

  public resetCartToApi = async (): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.delete(this.url+'reset'));

  };
};
