import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { StatisticsApiService } from './services/statistics/statistics-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private _userService: UserService,
    private _statisticsApiService: StatisticsApiService,

  ){ };

  ngOnInit(): void {

    this._userService.getUserFromLocalStorage();

  };

};
