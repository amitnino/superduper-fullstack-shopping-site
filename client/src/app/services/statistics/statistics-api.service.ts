import { Injectable } from '@angular/core';
import { ApiResponseInterface } from 'src/app/interfaces/api/api-response-interface';
import { OrderInterface } from 'src/app/interfaces/order/order-interface';
import { ApiService } from '../api/api.service';
import { StatisticsInterface } from '../../interfaces/order/statistics-interface';

@Injectable({
  providedIn: 'root'
})
export class StatisticsApiService {

  public statistics: StatisticsInterface;

  constructor(
    private _api: ApiService,

  ) { };

  public getStatistics = async (): Promise<any> => {

    const response: ApiResponseInterface = await this._api.defaultApiResponseHandler(this._api.get('statistics'));

    if (response.err) {
      console.log(response.msg);
    };

    this.statistics = { ...response.statistics };

  };
};
