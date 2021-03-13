import { Injectable, OnInit } from '@angular/core';
import { CartInterface } from 'src/app/interfaces/cart-interface';
import { UserService } from '../user/user.service';
import { CartApiService } from './cart-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  constructor(
    private _cartApiService: CartApiService,

  ) { }

  ngOnInit(): void {
  }
  
  public cart: CartInterface;

  public initialCart: CartInterface = {
    _id: undefined,
    userId: undefined,
    totalPrice: 0,
    isActive: false,
    createdAt: undefined,
    updatedAt: undefined,
    cartItems: []
  };

  public createNewCart = async (): Promise<void> => {

    const response = await this._cartApiService.createNewCartToApi();

    if ( response.err ) return console.log(response.msg);

    this.updateCartState(response.cart);

  };

  public getOpenCartByUserID = async (): Promise<void> => {

    const response = await this._cartApiService.getOpenCartByUserIdFromApi();

    if ( response.err ) {

      console.log(response.msg);
      this.createNewCart();
      return ;

    };

    this.updateCartState(response.cart);

  };

  public updateCartState = (cart: CartInterface): void => {

    this.cart = {...cart};

  }
  
  // - addItemToCart()
  // - editItemAmount()
  // - removeItemFromCart()
  // - emptyCart()
  // - updateCartState()
}
