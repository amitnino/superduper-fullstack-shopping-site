import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { StoreService } from './services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private _userService: UserService,
    private _storeService: StoreService,


  ){ };

  ngOnInit(): void {

    this._userService.getUserFromLocalStorage();
    this._storeService.getStore();

  }

}
