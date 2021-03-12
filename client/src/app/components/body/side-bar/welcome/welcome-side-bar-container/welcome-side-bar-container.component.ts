import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-welcome-side-bar-container',
  templateUrl: './welcome-side-bar-container.component.html',
  styleUrls: ['./welcome-side-bar-container.component.css']
})
export class WelcomeSideBarContainerComponent implements OnInit {

  constructor(
    public _us: UserService
  ) { }

  ngOnInit(): void {
  }

}
