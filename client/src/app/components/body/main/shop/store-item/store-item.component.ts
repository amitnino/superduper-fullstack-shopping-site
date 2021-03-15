import { Component, Input, OnInit } from '@angular/core';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  @Input()
  public storeItem: StoreItemInterface;

  constructor(
    public _storeService:  StoreService,

  ) { };

  ngOnInit(): void {
  };

  

};
