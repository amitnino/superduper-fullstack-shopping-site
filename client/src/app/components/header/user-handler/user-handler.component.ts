import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-handler',
  templateUrl: './user-handler.component.html',
  styleUrls: ['./user-handler.component.css']
})
export class UserHandlerComponent implements OnInit {

  constructor(
    public _userService: UserService,
    
  ) { };

  ngOnInit(): void {
  };

};