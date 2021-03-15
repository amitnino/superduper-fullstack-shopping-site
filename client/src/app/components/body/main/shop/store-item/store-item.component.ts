import { Component, Input, OnInit } from '@angular/core';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  @Input()
  public storeItem: StoreItemInterface;

  public amount: number = 1;

  constructor(
    public _cartService: CartService,

  ) { };

  ngOnInit(): void {
  };

  public addItemToCart = (): void => {

    const body = {
      storeItemId: this.storeItem._id, 
      amount: this.amount
    };

    this._cartService.addItemToCart(body);

  };

  public changeItemAmountButton = (addMore:boolean = false): void => {

    if (addMore) {
      this.amount += 1;
      return;
    };

    if (this.amount === 1) {
      return;
    };

    this.amount -= 1;
    return;

  };

};
