import { Component, OnInit } from '@angular/core';
import { OrderApiService } from 'src/app/services/order/order-api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(
    public _os: OrderApiService,
  ) { }

  ngOnInit(): void {
  }

}
