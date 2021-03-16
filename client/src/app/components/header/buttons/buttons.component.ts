import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(
    public router: Router,

  ) { }

  ngOnInit(): void {
  }
  public navigateToHomePage = ():void => {
    this.router.navigateByUrl('/welcome')
  };
  public navigateToShopPage = ():void => {
    this.router.navigateByUrl('/shop')
  };

}
