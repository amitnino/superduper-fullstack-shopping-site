import { Component, OnInit } from '@angular/core';
import { StatisticsApiService } from 'src/app/services/statistics/statistics-api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(
    public _statisticsApiService: StatisticsApiService,
  ) { }

  ngOnInit(): void {
    this._statisticsApiService.getStatistics();
  }

}
