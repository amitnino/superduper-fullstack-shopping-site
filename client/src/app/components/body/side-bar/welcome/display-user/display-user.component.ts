import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  constructor(
    public _userService: UserService,
    public _cartService: CartService,
    public router: Router,
  ) { };

  ngOnInit(): void {
  };

  public logOutButtonClick = () => {

    this._userService.logout();

  };

  public startShoppingButtonClick = () => {


    if ( !this._cartService.cart._id ) {

      this._cartService.createNewCart();

    };
    
    this.router.navigateByUrl('/shop');

  };

}
