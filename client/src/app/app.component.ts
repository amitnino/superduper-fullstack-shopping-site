import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { SideNavService } from './services/side-nav/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private _userService: UserService,
    private _sideNavService: SideNavService,

  ){ };

  ngOnInit(): void {

    this._userService.getUserFromLocalStorage();
    this._sideNavService.toggleSidenavToggleButtonIcon();

  };

};
