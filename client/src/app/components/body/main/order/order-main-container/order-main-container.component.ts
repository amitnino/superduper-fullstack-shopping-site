import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-order-main-container',
  templateUrl: './order-main-container.component.html',
  styleUrls: ['./order-main-container.component.css']
})
export class OrderMainContainerComponent implements OnInit {

  constructor(
    public _userService: UserService,

  ) { };

  ngOnInit(): void {
  };

  

};
