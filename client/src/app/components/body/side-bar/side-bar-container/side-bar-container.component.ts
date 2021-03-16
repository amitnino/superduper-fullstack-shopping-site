import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.css']
})
export class SideBarContainerComponent implements OnInit {

  constructor(
    public router: Router,
    public _userService: UserService

  ) { }

  ngOnInit(): void {
  }

}
