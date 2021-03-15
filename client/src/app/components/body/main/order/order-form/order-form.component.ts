import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { OrderApiService } from 'src/app/services/order/order-api.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public _orderApiService: OrderApiService

  ) { };

  public orderForm: FormGroup;

  ngOnInit(): void { 
    this.orderForm = this.formBuilder.group({
      city: ['', [Validators.required]],
      street: [{value:'', disabled: true}, [Validators.required]],
      orderDate: ['', [Validators.required]],
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

    console.log(this.orderForm.value);
  
  };

  get cityControl() {
    return this.orderForm.controls['city'];
  };
  get streetControl() {
    return this.orderForm.controls['street'];  
  };
  get orderDateControl() {
    return this.orderForm.controls['orderDate'];
  };
  get creditCardControl() {
    return this.orderForm.controls['creditCard'];
  };

};
