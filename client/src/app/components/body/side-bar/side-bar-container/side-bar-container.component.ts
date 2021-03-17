import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavService } from 'src/app/services/side-nav/side-nav.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.css']
})
export class SideBarContainerComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 640){
      this._sideNavService.isSideNavInSideMode = false;
    }else{
      this._sideNavService.isSideNavInSideMode = true;
    }
  };

  constructor(
    public router: Router,
    public _userService: UserService,
    public _sideNavService: SideNavService

  ) { }

  ngOnInit(): void {
  }

}
