import { Injectable, OnInit } from '@angular/core';
import { CartApiBodyRequestInterface } from 'src/app/interfaces/cart/cart-api-body-request-interface';
import { CartInterface } from 'src/app/interfaces/cart/cart-interface';
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
  
  public updateCartState = (cart: CartInterface): void => {

    this.cart = {...cart};

  };

  public defaultCartApiResponseHandler = async (apiResponse: Promise<any>): Promise<void> => {

    const response = await apiResponse;

    if ( response.err ) return console.log(response.msg);
    
    this.updateCartState(response.cart);
    
  };
  
  public createNewCart = async (): Promise<void> => {
    
    await this.defaultCartApiResponseHandler(this._cartApiService.createNewCartToApi());
    
  };
  
  public getOpenCartByUserID = async (): Promise<void> => {
    
    const response = await this._cartApiService.getOpenCartByUserIdFromApi();
    
    if ( response.err ) {
      
      console.log(response.msg);
      this.createNewCart();
      return;
      
    };
    
    this.updateCartState(response.cart);
    
  };
  
  public addItemToCart = async ( body: CartApiBodyRequestInterface ): Promise<void> => {

    await this.defaultCartApiResponseHandler(this._cartApiService.addItemToCartToApi(body));

  };

  public editItemAmount = async ( body: CartApiBodyRequestInterface ): Promise<void> => {

    await this.defaultCartApiResponseHandler(this._cartApiService.editItemAmountToApi(body));
    
  };
  
  public removeItemFromCart = async (cartItemId: string): Promise<void> => {
    
    await this.defaultCartApiResponseHandler(this._cartApiService.removeItemFromCartToApi(cartItemId));

  };

  public resetCart = async (): Promise<any> => {

    await this.defaultCartApiResponseHandler(this._cartApiService.resetCartToApi());

  };

};