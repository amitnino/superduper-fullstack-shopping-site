import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-side-bar-container',
  templateUrl: './cart-side-bar-container.component.html',
  styleUrls: ['./cart-side-bar-container.component.css']
})
export class CartSideBarContainerComponent implements OnInit {

  constructor(
    public router: Router,
    public _cartService: CartService,

  ) { }

  ngOnInit(): void {
  }

  

};
