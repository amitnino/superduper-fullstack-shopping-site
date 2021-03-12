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
    _id: 'no',
    totalPrice: 15,
    isActive: true,
    createdAt: new Date(Date.now()-1000000),
    updatedAt: new Date(Date.now()-1000000),
    cartItems: [
      {
        _id: 'id1',
        totalPrice: 5,
        amount: 2,
        storeItem: {
          _id: 'id2',
          name: 'store item name',
          price: 2.5,
          picture: 'picture path',
          categoryId: 'id1'
        }
      },
      {
        _id: 'id2',
        totalPrice: 10,
        amount: 1,
        storeItem: {
          _id: 'id3',
          name: 'store item name',
          price: 10,
          picture: 'picture path',
          categoryId: 'id2'
        }
      },
    ]
  }

}
