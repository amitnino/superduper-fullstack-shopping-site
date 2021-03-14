import { Injectable } from '@angular/core';
import { StoreApiService } from 'src/app/services/store/store-api.service';
import { StoreCategoryInterface } from 'src/app/interfaces/store/store-category-interface';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';
import { StoreApiResponseInterface } from 'src/app/interfaces/store/store-api-response-interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    public _storeApiService: StoreApiService
  ) { };

  public storeItems: StoreItemInterface[]
  public storeCategories: StoreCategoryInterface[];

  private updateStoreItemsState = (newStoreItemsState: StoreItemInterface[]): void => {

    this.storeItems = new Array(...newStoreItemsState);

  };

  private defaultStoreApiResponseHandler = async (apiResponse:Promise<any>): Promise<void> => {

    const response: StoreApiResponseInterface = await apiResponse;

    this.updateStoreItemsState(response.storeItems);

  };

  public getStore = async (): Promise<void> => {

    const response: StoreApiResponseInterface = await this._storeApiService.getStoreFromApi();

    if ( response.err ) return console.log(response.msg);

    this.updateStoreItemsState(response.storeItems);

    this.storeCategories = response.storeCategories;

  };

  public getItemById = async (itemId: string): Promise<void> => {
    
    return await this._storeApiService.getItemByIdFromApi(itemId);

  };

  public getItemsByCategoryId = async (categoryId: string): Promise<any> => {

    await this.defaultStoreApiResponseHandler(this._storeApiService.getItemsByCategoryIdFromApi(categoryId));

  };

  public getItemsBySearch = async (query: string): Promise<any> => {

    await this.defaultStoreApiResponseHandler(this._storeApiService.getItemsBySearchFromApi(query));

  };

};

