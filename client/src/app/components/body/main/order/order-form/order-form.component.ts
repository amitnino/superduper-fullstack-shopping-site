import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';
import { OrderInterface } from 'src/app/interfaces/order/order-interface';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public _userService: UserService,
    public _cartService: CartService,

  ) { };

  public orderForm: FormGroup;

  ngOnInit(): void { 
    this.orderForm = this.formBuilder.group({
      city: ['', [Validators.required]],
      street: [{value:'', disabled: true}, [Validators.required]],
      delieveryDate: ['', [Validators.required]],
      creditCard: ['', [Validators.required]],
    });
  };

  public disabledDatesFilter = (date: any | null): boolean => {

    if (!date) return false ;  
    
    if ( date._d.getTime() < Date.now() ) return false;

    if ( date._d.getDate().toString() === new Date(1616277600000).getDate().toString() ) return false;

    // console.log(date._d.getDate().toString()); // used for debugging

    return true;

  };

  public toggleStreetInputOnCitySelection = (): void => {

    this.cityControl.invalid ? this.streetControl.disable() : this.streetControl.enable();
  
  };

  public submitOrderButton = ():void => {

    const body: OrderInterface = {

      ...this.orderForm.value,
      delieveryDate: new Date(this.delieveryDateControl.value._d),
      creditCard: this.hideCreditCard(this.creditCardControl.value),
      cartId: this._cartService.cart._id,
      userId: this._userService.user._id

    };

    this._userService.placeOrder(body);
  
  };

  private hideCreditCard = (creditCard: string): string => {

    return creditCard.replace(/[0-9](?=([0-9]{4}))/g, '*');

  };

  get cityControl() {
    return this.orderForm.controls['city'];
  };
  get streetControl() {
    return this.orderForm.controls['street'];  
  };
  get delieveryDateControl() {
    return this.orderForm.controls['delieveryDate'];
  };
  get creditCardControl() {
    return this.orderForm.controls['creditCard'];
  };

};
