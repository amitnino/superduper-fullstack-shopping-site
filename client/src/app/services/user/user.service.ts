import { Injectable, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';
import { UserInterface } from '../../interfaces/user/user-interface';
import { CartService } from '../cart/cart.service';
import { OrderInterface } from 'src/app/interfaces/order/order-interface';
import { StatisticsApiService } from '../statistics/statistics-api.service';
import { Router } from '@angular/router';
import { ApiResponseInterface } from 'src/app/interfaces/api/api-response-interface';
import { SnackBarService } from '../snackbar/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  public cityList = [

    'Jerusalem',
    'Tel Aviv',
    'Haifa',
    'Ashdod',
    'Rishon LeZiyon',
    'Petah Tikva',
    'Beersheba',
    'Netanya',
    'Holon',
    'Bnei Brak',
    'Rehovot',
    'Bat Yam'

  ]

  constructor(
    private _userApiService: UserApiService,
    private _cartService: CartService,
    private _statisticsApiService: StatisticsApiService,
    private router: Router,
    private _snackbarService: SnackBarService,

  ) { }

  public isLoggedIn: boolean = false;
  public recieptReady: boolean = false;
  public order: OrderInterface;
  public unAvailableDates: string[];
  public user: UserInterface;
  public initialUser: UserInterface = {

    _id: undefined,
    username: undefined,
    fullName: undefined,
    isAdmin: false,
    city: undefined,
    street: undefined,
    lastOrder: undefined,
    numberOfOrders: 0

  };

  public snackBarMessages: any = {
    badToken: 'Whoops, Bad Token, Login again!',
    wrongInfo: 'Username or Password are invalid',
    welcome: "You're In!",
    error: 'Uh oh! Something Went Wrong!',

  };

  ngOnInit(): void {
  };

  public logout = (): void => {

    this.user = { ...this.initialUser };
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigateByUrl('/welcome');
    
  };

  public getUserFromLocalStorage = async (): Promise<void> => {

    if (!localStorage.getItem('token')) {
      this.logout();
      return;
      
    };
    
    const response = await this.verifyUserToken();
    
    if (response.err) {
      
     
      this.logout();
      return;
      
    };
    
    const cartResponse: ApiResponseInterface = await this._cartService.getOpenCartByUserID();
    
    if (cartResponse?.err) {

      this.logout();
      return;

    };
    
    this.user = this._userApiService.getUserFromToken(localStorage.getItem('token'));
    this.isLoggedIn = true;
    
  };
  
  public loginUser = async (body: { username: string, password: string }) => {
    
    const response = await this._userApiService.loginUserToApi(body);
    
    this.user = this._userApiService.getUserFromToken(localStorage.getItem('token'));

    if (response.err){  
      
      this._snackbarService.openSnackBar(this.snackBarMessages.wrongInfo);
      return;

    };
    // handleError() TODO
    
    this.user = { ...this._userApiService.getUserFromToken(response.loginToken) }
    
    this._cartService.updateCartState(response.cart);
    
    this.isLoggedIn = true;
    
    this._snackbarService.openSnackBar(this.snackBarMessages.welcome);
    
  };
  
  public verifyUserToken = async (): Promise<any> => {
    
    return await this._userApiService.verifyUserTokenToApi();
    
  };
  
  public validateRegisterForm = async (body: { israeliId: string, username: string }) => {
    
    return await this._userApiService.validateRegisterFormToApi(body);
    
  };
  
  public registerUser = async (body: UserInterface): Promise<any> => {
    
    return await this._userApiService.registerUserToApi(body)
    
  };
  
  public placeOrder = async (body: OrderInterface): Promise<void> => {
    
    const response = await this._userApiService.placeOrderToApi(body);
    
    if (response.err) {
      
      this._snackbarService.openSnackBar(this.snackBarMessages.error);
      return;
      
    };
    
    this.user = { ...this._userApiService.getUserFromToken(response.loginToken) };
    
    this._cartService.updateCartState(this._cartService.initialCart);
    
    this._statisticsApiService.getStatistics();
    
    this.order = { ...response.order };
    
    this.recieptReady = true;
    
  };
  
  public getUnavailableDates = async (): Promise<any> => {
    
    const response = await this._userApiService.getUnavailableDatesFromApi();
    
    if (response.err) {
      
      console.log(response.msg);
      return;
      
    };
    
    this.unAvailableDates = [...response.unAvailableDates];
    
  };
  
};
