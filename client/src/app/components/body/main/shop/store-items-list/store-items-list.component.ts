import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-store-items-list',
  templateUrl: './store-items-list.component.html',
  styleUrls: ['./store-items-list.component.css']
})
export class StoreItemsListComponent implements OnInit {

  constructor(
    public _storeService: StoreService,


  ) { };

  ngOnInit(): void {
  };

  

};
