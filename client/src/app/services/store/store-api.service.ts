import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(
    private _api: ApiService,

  ) { };

  private url: string = 'store/';

  public getStoreFromApi = async (): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.url));

  };
  public getAllStoreItemsFromApi = async (): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.url + 'items'));

  };

  public getItemByIdFromApi = async (itemId: string): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.url + 'ItemId/' + itemId));

  };

  public getItemsByCategoryIdFromApi = async (categoryId: string): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.url + 'categoryId/' + categoryId));

  };

  public getItemsBySearchFromApi = async (query: string): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.url + 'search/' + query));

  };
};
