import { Injectable } from '@angular/core';
import { StoreApiService } from 'src/app/services/store/store-api.service';
import { StoreCategoryInterface } from 'src/app/interfaces/store/store-category-interface';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';
import { StoreApiResponseInterface } from 'src/app/interfaces/store/store-api-response-interface';
import { SnackBarService } from '../snackbar/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private _storeApiService: StoreApiService,
    
  ) { };

  public storeItems: StoreItemInterface[]
  public storeCategories: StoreCategoryInterface[];

  private updateStoreItemsState = (newStoreItemsState: StoreItemInterface[]): void => {

    this.storeItems = new Array(...newStoreItemsState);

  };

  private defaultStoreApiResponseHandler = async (apiResponse:Promise<any>): Promise<any> => {
    
    const response: StoreApiResponseInterface = await apiResponse;
    
    if ( response.msg ) console.log(response.msg);

    if (response.err) {
      
      return response;
      
    };
    
    this.updateStoreItemsState(response.storeItems);

    return response;
    
  };
  
  public getStore = async (): Promise<void> => {
    
    const response: StoreApiResponseInterface = await this._storeApiService.getStoreFromApi();
    
    if ( response.err ) return console.log(response.msg);
    
    this.updateStoreItemsState(response.storeItems);
    
    this.storeCategories = response.storeCategories;
    
  };

  public getAllStoreItems = async (): Promise<any> => {

    await this.defaultStoreApiResponseHandler(this._storeApiService.getAllStoreItemsFromApi());

  };

  public getItemById = async (itemId: string): Promise<any> => {
    
    return await this._storeApiService.getItemByIdFromApi(itemId);

  };

  public getItemsByCategoryId = async (categoryId: string): Promise<any> => {

    await this.defaultStoreApiResponseHandler(this._storeApiService.getItemsByCategoryIdFromApi(categoryId));

  };

  public getItemsBySearch = async (query: string): Promise<any> => {

    await this.defaultStoreApiResponseHandler(this._storeApiService.getItemsBySearchFromApi(query));

  };

  public addOrEditItemToStore = async (body: StoreItemInterface, isEdit: boolean): Promise<any> => {

    return await this.defaultStoreApiResponseHandler(this._storeApiService.addOrEditStoreItemToApi(body, isEdit));

  };

};

