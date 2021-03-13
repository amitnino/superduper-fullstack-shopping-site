import { Component, Input, OnInit } from '@angular/core';
import { CartItemInterface } from 'src/app/interfaces/cart-item-interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: CartItemInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
