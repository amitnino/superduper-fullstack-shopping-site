import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-side-bar-container',
  templateUrl: './cart-side-bar-container.component.html',
  styleUrls: ['./cart-side-bar-container.component.css']
})
export class CartSideBarContainerComponent implements OnInit {

  @ViewChild('cartList') cartList: ElementRef;

  constructor(
    public router: Router,
    public _cartService: CartService,
    public formBuilder: FormBuilder,

  ) { }

  public searchForm: FormGroup;

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
    })
  }

  get searchControl(){
    return this.searchForm.controls['search'];
  };
  
  

};
