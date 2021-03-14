import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-btns',
  templateUrl: './cart-btns.component.html',
  styleUrls: ['./cart-btns.component.css']
})
export class CartBtnsComponent implements OnInit {

  constructor(
    public _cartService: CartService,
    public router: Router,

  ) { };

  ngOnInit(): void {
  };

  public submitOrder = (): void => {
    this.router.navigateByUrl('/order');
  };
  public resetCart = (): void => {
    this._cartService.resetCart();
  };
  
}
