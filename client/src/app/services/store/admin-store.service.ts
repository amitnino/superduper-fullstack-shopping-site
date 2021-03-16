import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService {

  public storeItemEditModeObserveable: Subject<any> = new Subject<any>();

  constructor(
  ) {};

  public passStoreItemForEdit = (storeItem: StoreItemInterface): void => {

    this.storeItemEditModeObserveable.next(storeItem);

  };
};
