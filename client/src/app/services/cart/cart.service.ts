import { Injectable } from '@angular/core';
import { CartInterface } from 'src/app/interfaces/cart-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  // - getCart()
  // - addItemToCart()
  // - editItemAmount()
  // - removeItemFromCart()
  // - emptyCart()
  // - updateCartState()

  public cart: CartInterface = {
    _id: undefined,
    totalPrice: 0,
    isActive: false,
    createdAt: undefined,
    updatedAt: undefined,
    cartItems: []
  }

}
