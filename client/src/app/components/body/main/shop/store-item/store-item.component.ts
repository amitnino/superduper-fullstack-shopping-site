import { Component, Input, OnInit } from '@angular/core';
import { StoreItemInterface } from 'src/app/interfaces/store/store-item-interface';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';
import { AdminStoreService } from './../../../../../services/store/admin-store.service';

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
    public _adminStoreService: AdminStoreService,
    public _userService: UserService,

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
