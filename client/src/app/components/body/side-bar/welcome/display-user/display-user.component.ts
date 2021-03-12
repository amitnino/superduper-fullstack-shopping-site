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
    public _us: UserService,
    public _cs: CartService,
    public router: Router,
    
  ) { };

  ngOnInit(): void {
  };

  public logOutButtonClick = () => {

    this._us.isLoggedIn = false;

  };

  public startShoppingButtonClick = () => {

    this.router.navigateByUrl('/shop');

  };

}
