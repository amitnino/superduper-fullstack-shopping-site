import { Injectable } from '@angular/core';
import { StoreItemInterface } from 'src/app/interfaces/store-item-interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  // - getItemsAndCategories()
  // - getItemById()
  // - getItemsByCategory()
  // - getItemsBySearch()
  // - updateStoreState()

  public store: StoreItemInterface[] = [
  ]
}

