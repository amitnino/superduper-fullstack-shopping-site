import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemInterface } from 'src/app/interfaces/cart/cart-item-interface';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: CartItemInterface;

  public newCartItemAmount: number
  public editAmountOpen: boolean = false;

  constructor(
    public _cartService: CartService,
    public router: Router

  ) { }

  ngOnInit(): void {
    this.newCartItemAmount = this.cartItem.amount
  };

  public allowEditAmount = (): void => {

    this.editAmountOpen = true;

  };

  public applyNewItemAmountButton = (): void => {

    const body = {
      cartItemId: this.cartItem._id, 
      amount: this.newCartItemAmount
    };

    this.editAmountOpen = false;
    this._cartService.editItemAmount(body);

  };

  public changeItemAmountButton = (addMore:boolean = false): void => {

    if (addMore) {
      this.newCartItemAmount += 1;
      return;
    };

    if (this.newCartItemAmount === 1) {
      return;
    };

    this.newCartItemAmount -= 1;
    return;

  };

  public removeItemButton = (): void => {

    this._cartService.removeItemFromCart(this.cartItem._id);

  };

}
