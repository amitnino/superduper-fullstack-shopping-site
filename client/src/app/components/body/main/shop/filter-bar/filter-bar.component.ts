import { Component, Input, OnInit } from '@angular/core';
import { StoreCategoryInterface } from 'src/app/interfaces/store/store-category-interface';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  @Input()
  public category: StoreCategoryInterface;

  constructor(
    public _storeService: StoreService

  ) { };

  ngOnInit(): void {
  };

  public chooseCategory = (categoryId: string): void => {

    this._storeService.getItemsByCategoryId(categoryId);

  };

  public chooseAllItems = (): void => {

    this._storeService.getAllStoreItems();

  };

};
