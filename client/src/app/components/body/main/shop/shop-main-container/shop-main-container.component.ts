import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-shop-main-container',
  templateUrl: './shop-main-container.component.html',
  styleUrls: ['./shop-main-container.component.css']
})
export class ShopMainContainerComponent implements OnInit {

  constructor(
    public _storeService: StoreService,

  ) { };

  ngOnInit(): void {
    this._storeService.getStore();
  }

  

};
