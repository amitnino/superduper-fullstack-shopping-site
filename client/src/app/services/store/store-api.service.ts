import { Injectable } from '@angular/core';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(
    private _api: ApiService,

  ) { };

  public userUrl: string = 'store/';
  public adminUrl: string = 'store/admin/';

  public getStoreFromApi = async (): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.userUrl));

  };
  public getAllStoreItemsFromApi = async (): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.userUrl + 'items'));

  };

  public getItemByIdFromApi = async (itemId: string): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.userUrl + 'ItemId/' + itemId));

  };

  public getItemsByCategoryIdFromApi = async (categoryId: string): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.userUrl + 'categoryId/' + categoryId));

  };

  public getItemsBySearchFromApi = async (query: string): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.get(this.userUrl + 'search/' + query));

  };

  public addOrEditStoreItemToApi = async (body: StoreItemInterface, isEdit: boolean): Promise<any> => {

    return await this._api.defaultApiResponseHandler(this._api.post(`${this.adminUrl}${isEdit ? 'edit' : 'add'}`, body));

  };
};
