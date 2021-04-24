import { Injectable, OnInit } from '@angular/core';
import { CartApiBodyRequestInterface } from 'src/app/interfaces/cart/cart-api-body-request-interface';
import { CartInterface } from 'src/app/interfaces/cart/cart-interface';
import { CartApiService } from './cart-api.service';
import { ApiResponseInterface } from 'src/app/interfaces/api/api-response-interface';
import { SnackBarService } from '../snackbar/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  constructor(
    private _cartApiService: CartApiService,
    private _snackbarService: SnackBarService,

  ) { }

  ngOnInit(): void {
  }
  
  public cart: CartInterface;

  public snackBarMessages = {
    add: 'Item Added to cart Successfully',
    edit: 'Item Amount Changed Successfully',
    remove: 'Item Removed from cart Successfully',
    reset: 'Cart reset was Successful',
    fail: 'Action was NOT successful'
  };
  
  
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

  public defaultCartApiResponseHandler = async (apiResponse: Promise<any>, snackBarMessageName?: string): Promise<void> => {

    const response = await apiResponse;

    if ( response.err ){

      this._snackbarService.openSnackBar(this.snackBarMessages.fail);
      return;
    } 
    
    if ( this.snackBarMessages ) this._snackbarService.openSnackBar(this.snackBarMessages[`${snackBarMessageName}`]);

    this.updateCartState(response.cart);
    
  };
  
  public createNewCart = async (): Promise<void> => {
    
    await this.defaultCartApiResponseHandler(this._cartApiService.createNewCartToApi());
    
  };
  
  public getOpenCartByUserID = async (): Promise<any> => {
    
    const response: ApiResponseInterface = await this._cartApiService.getOpenCartByUserIdFromApi();
    
    if ( response.err ) {
      
      if ( response.status === 450 ) {
        return response;
      };

      this.createNewCart();
      return;
      
    };    
    
    this.updateCartState(response.cart);
    
  };
  
  public addItemToCart = async ( body: CartApiBodyRequestInterface ): Promise<void> => {

    await this.defaultCartApiResponseHandler(this._cartApiService.addItemToCartToApi(body), 'add');
    
    
  };
  
  public editItemAmount = async ( body: CartApiBodyRequestInterface ): Promise<void> => {
    
    await this.defaultCartApiResponseHandler(this._cartApiService.editItemAmountToApi(body), 'edit');
    
  };
  
  public removeItemFromCart = async (cartItemId: string): Promise<void> => {
    
    await this.defaultCartApiResponseHandler(this._cartApiService.removeItemFromCartToApi(cartItemId), 'remove');
    
  };
  
  public resetCart = async (): Promise<any> => {
    
    await this.defaultCartApiResponseHandler(this._cartApiService.resetCartToApi(), 'reset');

  };

};