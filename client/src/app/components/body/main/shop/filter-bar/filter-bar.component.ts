import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabLink } from '@angular/material/tabs';
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

  public activeCategory: string

  constructor(
    public _storeService: StoreService

  ) { };

  ngOnInit(): void {
  };

  public chooseCategory = (categoryId: string): void => {

    this.activeCategory = categoryId;
    this._storeService.getItemsByCategoryId(categoryId);

  };

  public toggleSearchBar = (): void => {

    this.activeCategory = 'search';

  };

  public searchStoreItemsByQuery = (query: string): void => {

    if (!query) {
      this._storeService.getAllStoreItems();
      return;
    };

    this._storeService.getItemsBySearch(query);

  };

  

};
